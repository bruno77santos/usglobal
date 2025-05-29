import { ReactNode } from 'react';

type InputLabelSelectType = {
  labelTitle: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  option?: ReactNode;
};

export default function InputLabelSelect(props: InputLabelSelectType) {
  return (
    <label className="w-full">
      <p className="text-white font-[600] text-[20px] mb-2">{props.labelTitle}</p>
      <select
        onChange={props.onChange}
        className="bg-[#222222] border-2 border-[#555555] rounded-[8px] text-[#cccccc] h-[56px] px-5 outline-0 w-full
          bg-[url('/icons/caret_down.svg')] bg-no-repeat bg-[96%]  appearance-none"
        defaultValue="selecione"
      >
        <option value="selecione" disabled>
          Selecione
        </option>
        {props.option}
      </select>
    </label>
  );
}
