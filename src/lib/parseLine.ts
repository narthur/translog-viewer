import { Row } from "../components/organism/entries";

type ParsedLine = Row;

export default function parseLine(line: string): ParsedLine {
  const data = line.match(/([\d-T:]+) ([A-Z]+) ([\dA-Z]+) ([\w/_-]+) ?(.*)/);

  return {
    raw: line,
    timestamp: data?.[1],
    server: data?.[2],
    event: data?.[3],
    goal: data?.[4],
    data: data?.[5],
  };
}
