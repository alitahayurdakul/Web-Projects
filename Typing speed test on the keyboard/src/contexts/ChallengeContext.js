import React, { createContext, useState } from 'react';

export const ChallengeContext = createContext();
const initState = {
    challenges: [
        {
            id: 1,
            text: "Ali Taha Yurdakul",
            difficulty: "easy"
        },
        {
            id: 2,
            text: "İnsan, başkalarının kendisi hakkında ne düşündüğüyle ilgilendiğinin yarısı kadar kendisinin ne olduğu ile ilgilenmez.",
            difficulty: "hard"
        },
        {
            id: 3,
            text: "Yaşlandım Gandalf. Göstermiyorum ama bunu gönlümün ta derinliklerinde hissediyorum.",
            difficulty: "medium"
        },
        {
            id: 4,
            text: "Güzel bir sabahta yağan kara bir şey demem, tamam; ama kar yağarken ben yatakta olmalıyım.",
            difficulty: "hard"
        }
    ],
    selected: 1,
    index: 5
}
const initResult = [
   
]

const ChallengeContextProvider = (props) => {
    const [state, setChallenges] = useState(initState);
    const [results, setResults] = useState(initResult)

    const addChallenge = (challenge) => {
        let id = state.index;
        const newChallenge = { ...challenge, id }
        setChallenges({
            ...state,
            challenges: [...state.challenges, newChallenge],
            index: id + 1
        })
    }
    
    const addResult = (result) => {
        setResults([...results, result])
    }
    const setSelected = (id) => {
        setChallenges({
            ...state,
            selected: id
        })
    }
    
    return (
        <ChallengeContext.Provider value={{ ...state, results: [...results], addChallenge, setSelected, addResult }}>
            {props.children}
        </ChallengeContext.Provider>
    );
}

export default ChallengeContextProvider;