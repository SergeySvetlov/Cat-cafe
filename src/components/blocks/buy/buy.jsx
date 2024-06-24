import React, { useState } from "react";
import { Form, Label, Li } from "../../elements/index.js";
import RadioButton from "../../ui/radio-button/radio-button.jsx";
import { BuySection, BuyTitle, FormWrapper, FormButton, DurationList, RadioLabelForTime, RadioLabelForType, TextComponent, Price } from "./styled.js";
import Accordion from "../../ui/accordion/accordion.jsx";

function Buy({buyOptions}) {
    const durationHours = buyOptions.durationHours;
    const ticketTypes = buyOptions.ticketTypes;
    const [duration, setDuration] = useState(durationHours[0]);
    const [selectType, setSelectType] = useState(ticketTypes[0].id);
    const type = ticketTypes.find((option) => option.id === selectType);
    const price = type.price * duration + ` руб.`;
    const handleBuy = () => {alert(`итоговая цена ${price}`)};

    const accordionTabs = ticketTypes.map((option) => ({
        id: option.id,
        title: (
            <RadioButton
            labelComponent={RadioLabelForType}
            selectValue={selectType}
            value={option.id}
            onChange={(el) => {
                setSelectType(Number(el.target.value));
            }}
            >{option.title}</RadioButton>            
        ),
        description: option.description
    }))
    

    return ( 
        <BuySection>
            <BuyTitle level={2} size="big">Купить билет</BuyTitle>
            <FormWrapper> { durationHours.length && ticketTypes.length ? (
                <Form $width={540}>
                    <Label $margin={12}>Продолжительность (часов)</Label>
                    <DurationList>
                        {durationHours.map((option) => {
                            return (
                                <Li key={option}>
                                    <RadioButton
                                    labelComponent={RadioLabelForTime}
                                    selectValue={duration}
                                    value={option}
                                    onChange={(el) => {
                                        setDuration(Number(el.target.value));
                                    }}
                                    >{option}</RadioButton>            
                                </Li>
                            )
                        })}
                    </DurationList>
                    <Label $margin={12}>Тип билета</Label>
                    <Accordion tabs={accordionTabs} isHtml={true} textComponent={TextComponent}></Accordion>
                    <Label $margin={8} $small>Цена</Label>
                    <Price value={price}/>
                    <FormButton onClick={handleBuy}>Купить билет</FormButton>
                </Form> ) : (<p>Покупка билетов временно недоступна</p>)}
            </FormWrapper>
        </BuySection>
    )
}

export default Buy;