import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../../utils/firebase";

interface Task {
  name: string;
  description: string;
  date: string;
  priority: string;
}

export const taskUploading = (
  taskName: string | undefined,
  taskDes: string | undefined,
  selectedDate: string,
  selectedPriority: string
): Promise<string | null> => {
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

    const storageRef = ref(storage, `${uid}/tasks/${file.name}`);

    return uploadBytes(storageRef, file)
      .then(() => "Uploaded a JSON file!")
      .catch((error) => {
        console.log(error);
        return "Error uploading file:";
      });
  }
  return Promise.resolve(null);
};

export const retrieveAllTasks = async (): Promise<Task[]> => {
  const tasksData: Task[] = [];
  const user = auth.currentUser;
  try {
    if (!user) throw new Error("User is not authenticated");

    const uid = user.uid;
    const tasksRef = ref(storage, `${uid}/tasks/`);
    const result = await listAll(tasksRef);

    for (const itemRef of result.items) {
      const downloadURL = await getDownloadURL(itemRef);
      const response = await fetch(downloadURL);
      if (!response.ok)
        throw new Error(`Failed to fetch task: ${response.statusText}`);

      const taskData: Task = await response.json();
      tasksData.push(taskData);
    }
  } catch (error) {
    console.error("Error retrieving tasks:", error);
  }
  return tasksData;
};
