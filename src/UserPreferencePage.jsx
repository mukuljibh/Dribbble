import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmailToUserAPI } from "./apiService";
import { useSelector } from "react-redux";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { pink } from "@mui/material/colors";

export default function UserPreferencePage() {
    const [isLoading, SetIsLoading] = useState(null);
    const globalUserDetails = useSelector(
        (globalState) => globalState.user.GlobalUserDetails,
    );
    const [cardChoices] = useState([
        {
            heading: "I'm designer looking to share my work",
            description:
                " As a designer, you can share your work by creating an impressive online portfolio where peoples can see your talent. ",
            imgSrc:
                "https://res.cloudinary.com/df8suxer2/image/upload/v1713090648/n2dxwzjxnf5fq18qgaug.png",
        },
        {
            heading: "I'm looking for hire a designer",
            description:
                "Dribbble is the leading source for design inspiration with over 7 million shots from a vast community of designers.",
            imgSrc:
                "https://res.cloudinary.com/df8suxer2/image/upload/v1713090020/rvfnfrq0k3wou9c7kkej.png",
        },
        {
            heading: "I'm looking for design inspiration",
            description:
                "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
            imgSrc:
                "https://res.cloudinary.com/df8suxer2/image/upload/v1713090089/f9nh1cegtr8q7woauzpg.png",
        },
    ]);

    let navigateTo = useNavigate(true);
    //this hook is used to change the state of the card in the DOM instead of changin the entire re rendering the entire main state cards.
    const [selectedCards, setSelectedCards] = useState([]);

    function toggleCardSelection(index) {
        setSelectedCards((prev) => {
            const selectedCardsIndex = prev.findIndex((x) => x.index === index);
            if (selectedCardsIndex > -1) {
                prev[selectedCardsIndex].flag = !prev[selectedCardsIndex].flag;
            } else {
                prev.push({
                    flag: true,
                    index: index,
                });
            }
            return [...prev];
        });
    }
    function handleSubmit() {
        SetIsLoading(true);
        //hitting up api for sending email to user
        sendEmailToUserAPI(globalUserDetails)
            .then((response) => {
                alert(response);
                SetIsLoading(false);
                navigateTo("/verify-email");
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div className="space-y-11 ">
            <div className="flex justify-start md:pr-0 pr-5 pb-4  ">
                <img
                    className=" h-14 relative left-9 top-5"
                    src="https://res.cloudinary.com/df8suxer2/image/upload/v1713085030/xlsuba1pijqdde2abjil.png"
                    alt="logo"
                />
            </div>

            <div className="flex flex-col justify-center gap-4 ">
                <div className="text-center">
                    <h1 className="md:text-3xl text-2xl font-black">
                        What brings you to Dribbble?
                    </h1>
                </div>
                <div className="text-center">
                    <h1 className="text-zinc-500 md:text-base text-sm ">
                        Select the options that best describe you. Don't worry, you can
                        explore other options later.
                    </h1>
                </div>
            </div>

            {/* card div*/}
            <div className="lg:gap-9 gap-16 flex lg:flex-row flex-col justify-center md:pt-10 pt-4">
                {cardChoices.map((card, index) => (
                    <div
                        key={index}
                        className={` flex justify-center border-2 hover:border-pink-500 border-gray-200 rounded-3xl  md:h-72 md:w-80 h-72 w-64 self-center  ${selectedCards[index]?.flag && selectedCards[index]?.index === index ? "border-pink-500" : ""}`}
                    >
                        <div className={` flex flex-col h-64 w-64 justify-end `}>
                            <div className=" md:w-56 w-48 self-center mt-10 relative top-1 flex flex-col ">
                                <div
                                    className={`transition-all duration-500 ease-out  ${selectedCards[selectedCards.findIndex((item) => item.index === index)]?.flag ? "w-full" : "md:w-72 w-60 "} self-center`}
                                >
                                    <img src={card.imgSrc} alt="logo" />
                                </div>
                                <div className="text-center text-wrap  pt-4 font-black text-md">
                                    {card.heading}
                                </div>
                            </div>
                            {selectedCards[
                                selectedCards.findIndex((item) => item.index === index)
                            ]?.flag ? (
                                <div className="text-center text-zinc-500 text-sm text-wrap pt-6 ">
                                    {card.description}
                                </div>
                            ) : null}
                            <div className="self-center">
                                <Checkbox
                                    onClick={() => {
                                        toggleCardSelection(index);
                                    }}
                                    className=" h-10 w-10  "
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 28,
                                        },

                                        "&.Mui-checked": {
                                            color: pink[400],
                                        },
                                        color: "grey",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className=" flex flex-col justify-center gap-y-5  ">
                <div className="self-center">
                    <h1 className=" md:text-basic text-sm font-bold">
                        Anything else? You can select multiple
                    </h1>
                </div>

                <div className="self-center space-x-1 ">
                    <button
                        onClick={handleSubmit}
                        className=" text-white px-20 py-2 rounded-md bg-pink-500"
                    >
                        Finish
                    </button>
                    {isLoading ? (
                        <div
                            className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status"
                        >
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Loading...
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
