type InputRadioType = {
  inputDesc: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputRadio(props: InputRadioType) {
  return (
    <label htmlFor={props.name} className="flex items-center gap-2 cursor-pointer relative">
      <input
        className="flex-shrink-0 peer appearance-none w-[27px] h-[27px] border-2 border-white rounded-full cursor-pointer bg-transparent"
        type="radio"
        name={props.name}
        onChange={props.onChange}
      />
      <div className="peer-checked:w-[13px] peer-checked:h-[13px] absolute ml-[6.8px] peer-checked:bg-white rounded-full"></div>
      {props.inputDesc}
    </label>
  );
}
