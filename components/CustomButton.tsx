"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, btnType, handleClick, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
