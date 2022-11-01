import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export const uploadImage = async (image: string, imageName: string) => {
  const storageRef = ref(storage, "images/" + imageName);
  await uploadString(storageRef, image, "data_url");
  const url = await getDownloadURL(storageRef);
  return url;
};
