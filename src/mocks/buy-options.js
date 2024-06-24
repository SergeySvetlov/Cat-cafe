const buyOptions = {
    durationHours: [1,2,3,4,5],
    ticketTypes: [
        {
            id: 0,
            title: "Cтандартный",
            description: `Вы сможете:
              <ul>
                <li>Поиграть со всеми пушистиками.</li>
                <li>Заказать вкусности для себя и пушистых хвостиков.</li>
              </ul>`,
            price: 1000,
        },
        {
            id: 1,
            title: "VIP",
            description: `Билеты класса VIP предоставляют все возможности стандартных билетов, а также:
              <ul>
                <li>Экскурсия с рассказом о жителях котокафе.</li>
                <li>Бесплатные лакомства для котиков.</li>
              </ul>`,
            price: 1500,
        }
    ]
}

export default buyOptions;