import {testFn} from "my-library";

export const <%= nameTitle %> = ()=> {
  return <div>Hello <%= name %> {testFn()}</div>
}