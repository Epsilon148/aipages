import { tools as baseTools } from "./tools";
import { toolsPack2 } from "./tools-pack-2";
import { toolsPack3 } from "./tools-pack-3";

export const tools = [...baseTools, ...toolsPack2, ...toolsPack3];
