export default function TechKidsCourses({logo, header, text}) {
  return (
    <div className="flex flex-col border border-[#D6D3D3] rounded-xl p-7">
        <div className="bg-[#ECFDF5] border border-[#10B981]">{logo}</div>
        <div className="flex items-center flex-col justify-center mt-5">
        <h3 className="text-[#222222] font-fredoka font-medium text-[24px]">{header}</h3>
        <p className="text-[#747070] font-inter text-[16px]">{text}</p>
        </div>
    </div>
  )
}

