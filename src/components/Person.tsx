import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Props) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false);
  const [personBio, setPersonBio] = useState<string | null>(null);
  const { users } = useContext(UserContext);

  const handleClick = () => {
    setIsShowInfo(!isShowInfo);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      {isShowInfo && (
        <>
          <div>{props.name}</div>
          <div>{props.age}</div>
          <div>{props.isMarried ? "is married" : "is not"}</div>
        </>
      )}
      <button onClick={handleClick}>Show info</button>
      <p>{personBio ? `personBio: ${personBio}` : "No personBio available"}</p>
      <input onChange={handleChange} />
    </>
  );
};
