import React from 'react'
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { IconContext } from 'react-icons';

export default function Confidence({ confidence }: { confidence: number }) {
  return (
    <div className="flex gap-2">
        <IconContext.Provider value={{ color: (confidence == 1) ? 'red' : 'white' }}>
            <MdOutlineSentimentVeryDissatisfied className="text-2xl" />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: (confidence == 2) ? 'orange' : 'white' }}>
            <MdOutlineSentimentDissatisfied className="text-2xl" />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: (confidence == 3) ? 'yellow' : 'white' }}>
            <MdOutlineSentimentNeutral className="text-2xl" />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: (confidence == 4) ? '#90EE90' : 'white' }}>
            <MdOutlineSentimentSatisfied className="text-2xl" />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: (confidence == 5) ? 'green' : 'white' }}>
            <MdSentimentVerySatisfied className="text-2xl" />
        </IconContext.Provider>
    </div>
  )
}
