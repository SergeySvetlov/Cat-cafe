import React, { useState, useEffect, useRef } from "react";
import { AccordionList, StyledItem, TitleWrapper, AccordionButton, Wrapper, ContentWrapper } from "./styled";

function AccordionItem({isHtml, onClick, isOpen, text, title, titleComponent, textComponent}) {
    const [height, setHeight] = useState(0);
    const TitleComponent = titleComponent;
    const TextComponent = textComponent || "div";
    const contentWrapper = useRef(null);

    useEffect(() => {
        setHeight(contentWrapper.current.offsetHeight);
    }, [text]);
    
    return (
    <>
        <TitleWrapper>
            {TitleComponent ? <TitleComponent>{title}</TitleComponent> : title}
           <AccordionButton type="button" onClick={onClick} isOpen={isOpen} title={`${isOpen ? "Скрыть" : "Раскрыть"} описание`}/> 
        </TitleWrapper>
        <Wrapper height={height} isOpen={isOpen}>
            <ContentWrapper ref={contentWrapper}>
            { isHtml ? <TextComponent dangerouslySetInnerHTML={{ __html: text }}/> : <TextComponent>{text}</TextComponent>}
            </ContentWrapper>
        </Wrapper>    
    </>
    )
}

function Accordion({ tabs, isHtml, titleComponent, textComponent }) {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    return (
        <AccordionList>
            {tabs && tabs.length && tabs.map((tab, i) => (
                <StyledItem key={tab.id}>
                    <AccordionItem 
                    isHtml={isHtml} 
                    onClick={() => setOpenItemIndex( i !== openItemIndex ? i : null)} 
                    isOpen={i === openItemIndex} 
                    text={tab.description} 
                    title={tab.title} 
                    titleComponent={titleComponent} 
                    textComponent={textComponent}/>
                </StyledItem>
            ))}
        </AccordionList>
    );
}

export default Accordion;