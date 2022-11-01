<template>
  <div
    class="w-[400px] flex flex-col items-center p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-xl bg-white"
  >
    <v-icon
      name="md-checkcircle-round"
      fill="#219653"
      scale="2"
      v-if="state === 'success'"
    ></v-icon>
    <p
      class="font-medium text-lg text-[#4f4f4f]"
      :class="{
        'self-start': state === 'in-progress',
        'mt-[10px] mb-6': state === 'success',
      }"
    >
      {{ title }}
    </p>
    <p v-if="state === 'pending'" class="text-[10px] text-[#828282] mt-4 mb-8">
      File should be JPEG, PNG, ...
    </p>
    <div
      v-if="state === 'pending'"
      @drop="onDropFile"
      @dragover="handleDragOver"
      @dragexit="handleDragExit"
      class="border border-[#97BEF4] border-dashed rounded-xl bg-[#F6F8FB] w-full p-9 flex flex-col items-center"
      :class="[isDragOver ? 'bg-blue-100' : '']"
    >
      <img :src="placeholderImg" alt="placeholder img" />
      <p class="text-[#BDBDBD] text-xs mt-9">Drag & Drop your image here</p>
    </div>
    <p v-if="state === 'pending'" class="text-[#BDBDBD] my-5">Or</p>
    <label
      v-if="state === 'pending'"
      id="imageInput"
      class="cursor-pointer py-2 px-4 bg-[#2F80ED] hover:bg-[#2F80ED]/90 rounded-lg text-[#FFFFFF] text-xs"
    >
      Choose a file
      <input
        hidden
        type="file"
        id="imageInput"
        @change="onUploadFile"
        accept="image/*"
      />
    </label>
    <ProgressBar v-if="state === 'in-progress'" class="mt-[30px]" />
    <div class="w-full h-[224px]" v-if="state === 'success'">
      <img
        :src="uploadImageURL"
        alt="success upload image"
        class="w-full h-full object-cover rounded-xl border"
      />
    </div>
    <div
      v-if="state === 'success'"
      class="flex items-center w-full h-[34px] rounded-lg bg-[#f6f8f8] border border-[#e0e0e0] mt-6"
    >
      <p class="text-[8px] text-[#4F4F4F] ml-2 truncate">
        {{ uploadImageURL }}
      </p>
      <button
        v-clipboard:copy="uploadImageURL"
        v-clipboard:success="onCopySuccess"
        class="flex-shrink-0 ml-auto btn text-[9px] w-[74px] h-[30px] rounded-lg bg-[#2F80ED] hover:bg-[#2F80ED]/90 text-white mr-[1px]"
      >
        {{ copyBtnTitle }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import placeholderImg from "../assets/image.svg";
import ProgressBar from "./ProgressBar.vue";
import { uploadImage } from "@/services/uploadImage";

type UploadState = "pending" | "in-progress" | "success";

const isDragOver = ref(false);
const state = ref<UploadState>("pending");
const copyBtnTitle = ref("Copy Link");
const uploadImageURL = ref("");

const title = computed(() => {
  if (state.value === "pending") return "Upload your image";
  if (state.value === "in-progress") return "Uploading...";
  if (state.value === "success") return "Uploaded Successfully!";
  return "";
});

const onCopySuccess = () => {
  copyBtnTitle.value = "Copied!";
  setTimeout(() => {
    copyBtnTitle.value = "Copy Link";
  }, 3000);
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
  isDragOver.value = true;
};
const handleDragExit = (event: DragEvent) => {
  event.preventDefault();
  isDragOver.value = false;
};

const handleUploadImage = async (file: File) => {
  try {
    state.value = "in-progress";
    const image = await readFile(file);
    uploadImageURL.value = await uploadImage(image, file.name);
    state.value = "success";
  } catch (error) {
    alert(error);
    state.value = "pending";
  }
};

const readFile = (file: File) => {
  return new Promise<string>((res, rej) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      res(fileReader.result as string);
    };
    if (file.size > 5 * 1000 * 1000) {
      rej(new Error("Image should less than 5Mb"));
    }
    fileReader.onerror = rej;
    fileReader.readAsDataURL(file);
  });
};

const onUploadFile = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  if (file && file.type.startsWith("image")) {
    await handleUploadImage(file);
  }
};

const onDropFile = async (event: DragEvent) => {
  event.preventDefault();
  isDragOver.value = false;
  const file = (event.dataTransfer?.files as FileList)[0];
  if (file && file.type.startsWith("image")) {
    await handleUploadImage(file);
  }
};
</script>
