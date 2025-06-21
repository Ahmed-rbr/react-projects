import React, { useState } from "react";
import QRCode from "react-qr-code";
const Qr = () => {
  const [qrCode, setQrcodeValue] = useState("");
  const [generate, setGenerate] = useState(false);

  return (
    <div className="flex-col flex w-2/5 items-center justify-center mx-auto">
      <h2 className="text-xl font-semibold my-4">QR Code Generator</h2>
      <div className="flex justify-center w-full p-4 gap-4">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          type="text"
          placeholder="Enter your value here"
          onChange={(e) => {
            setQrcodeValue(e.target.value);
            setGenerate(false);
          }}
        />
        <button
          onClick={() => setGenerate(true)}
          className="px-6 py-2 bg-amber-400 rounded hover:bg-amber-500 transition"
        >
          Generate
        </button>
      </div>
      {generate && qrCode && <QRCode value={qrCode} size={200} />}
    </div>
  );
};

export default Qr;
