type InputLabelType = {
    labelTitle: string,
    type: string,
    onChange: (e: any) => void,
    placeholder: string,
    value?: string
}


export default function InputLabel(props: InputLabelType) {
    return (
        <label className="w-full">
            <p className=" font-[600] text-[20px] mb-2">{props.labelTitle}</p>
            <input className="bg-[#222222] border-2 border-[#555555] rounded-[8px] text-[#cccccc] h-[56px] px-5 outline-0 w-full" type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </label>
    )
}