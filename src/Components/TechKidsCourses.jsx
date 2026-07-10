export default function TechKidsCourses({ logo, header, text }) {
  return (
    <div className="flex flex-col border border-[#D6D3D3] rounded-xl p-5 sm:p-6 md:p-7">
      <div className="bg-[#ECFDF5] border border-[#10B981] rounded-xl w-full aspect-[3/2] flex items-center justify-center">
        {logo}
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-5">
        <h3 className="text-[#222222] font-fredoka font-medium text-lg sm:text-xl md:text-2xl">
          {header}
        </h3>
        <p className="text-[#747070] font-inter text-sm sm:text-base mt-1">
          {text}
        </p>
      </div>
    </div>
  );
}