import { csvFile, FreeObject } from '@src/types';
import { Dispatch } from 'react';

import AddressList from './AddressList';
import UploadFile from './UploadFile';

interface UploadCsvProps {
  fileData: csvFile | null;
  setFileData: Dispatch<csvFile | null>;
  className: string;
  [key: string]: any;
}
function UploadCsv({ fileData, setFileData, className, ...props }: UploadCsvProps) {
  return (
    <section className={`w-[868.5px] ${className}`} {...props}>
      <div className="w-full pb-[12px] pl-[16px] border-b-[1px] border-solid border-[#222]">
        <p>Address</p>
      </div>
      <div
        className={`w-[100%] flex flex-col justify-center items-center ${
          fileData ? 'h-fit max-h-[374px] overflow-y-scroll' : 'h-[374px]'
        }`}
      >
        {fileData ? <AddressList fileData={fileData} /> : <UploadFile setFileData={setFileData} />}
      </div>
    </section>
  );
}

export default UploadCsv;
