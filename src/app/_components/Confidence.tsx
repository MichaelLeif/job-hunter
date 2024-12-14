import React from 'react'
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { MdSentimentVerySatisfied } from "react-icons/md";

export default function Confidence({ confidence }: { confidence: number }) {
  return (
    <div className="flex gap-2">
        <MdOutlineSentimentVeryDissatisfied className="text-2xl" />
        <MdOutlineSentimentDissatisfied className="text-2xl" />
        <MdOutlineSentimentNeutral className="text-2xl" />
        <MdOutlineSentimentSatisfied className="text-2xl" />
        <MdSentimentVerySatisfied className="text-2xl" />
    </div>
  )
}
