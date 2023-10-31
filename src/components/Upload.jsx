/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FileUpload = ({url}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("page_link", url);

      try {
        setUploading(true);
        const response = await axios.post(
          "https://www.uxlive.me/api/submit-csv/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setUploading(false);
        console.log(response.data);
        toast.success(JSON.stringify(response?.data?.success));

        // Optionally, you can display a success message to the user.
      } catch (error) {
        setUploading(false);
        console.error("Error uploading file:", error);
        // Handle the error and display an error message to the user.
        toast.error(error ? error?.response?.data?.error : error?.message);
        console.error("Form data submission failed:", error);
      }
    } else {
      console.log("No file selected.");
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto bg-white max-w-[800px]">
          <label
            className="block mb-4 font-bold text-xl text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="border block w-full p-2.5 border-black rounded-md focus:outline-none focus:green-500 focus:border-green-500"
            id="file_input"
            type="file"
            onChange={handleFileChange}
            disabled={!url}
          />
          <button
            disabled={!selectedFile || uploading}
            className="px-4 py-2 my-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
          {uploading ? "Uploading and Submitting..." : "Upload"}
          </button>
        </div>
      </form>
  );
};

export default FileUpload;
