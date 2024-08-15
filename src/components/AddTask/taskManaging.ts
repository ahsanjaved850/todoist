import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../../utils/firebase";

export const taskUploading = (
  taskName: string | undefined,
  taskDes: string | undefined,
  selectedDate: string,
  selectedPriority: string
) => {
  const user = auth.currentUser;
  const taskData = {
    name: taskName,
    description: taskDes,
    date: selectedDate,
    priority: selectedPriority,
  };

  if (user) {
    const uid = user.uid;
    const fileName = `${taskData.name}.json`;
    const fileBlob = new Blob([JSON.stringify(taskData)], {
      type: "application/json",
    });
    const file = new File([fileBlob], fileName, { type: "application/json" });

    // Create a storage reference with the user's UID
    const storageRef = ref(storage, `${uid}/tasks/${file.name}`);

    uploadBytes(storageRef, file)
      .then(() => {
        return "Uploaded a JSON file!";
      })
      .catch((error) => {
        console.log(error);
        return "Error uploading file:";
      });
  }
  return null;
};

const retrieveAllTasks = async () => {
  const user = auth.currentUser;

  if (user) {
    const uid = user.uid;
    const tasksRef = ref(storage, `${uid}/tasks/`);

    try {
      const result = await listAll(tasksRef);
      const tasksData = [];

      for (const itemRef of result.items) {
        const downloadURL = await getDownloadURL(itemRef);
        const response = await fetch(downloadURL);
        const taskData = await response.json();
        tasksData.push(taskData);
      }
      console.log("Retrieved all task data:", tasksData);
      return tasksData;
    } catch (error) {
      console.error("Error retrieving tasks:", error);
      return null;
    }
  }
  return null;
};
retrieveAllTasks();
