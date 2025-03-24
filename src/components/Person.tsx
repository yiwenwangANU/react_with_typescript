import { useState } from "react";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Props) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(true);
  return (
    <>
      {isShowInfo && (
        <>
          <div>{props.name}</div>
          <div>{props.age}</div>
          <div>{props.isMarried ? "is married" : "is not"}</div>
        </>
      )}
    </>
  );
};
