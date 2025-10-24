import React from "react";

const Profile = ({user}) => {
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Profile
        </h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <p className="font-medium">Name:</p>
            <p className="text-gray-600">{ user.name ||  "N/A"}</p>
          </div>

          <div>
            <p className="font-medium">Email:</p>
            <p className="text-gray-600">{ user.email || "N/A"}</p>
          </div>

          <div>
            <p className="font-medium">Phone:</p>
            <p className="text-gray-600">{ user.phone || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
