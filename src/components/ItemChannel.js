import React from 'react';


export default function ItemCard({channel, transmission}) {
    return (
        <div>
            <div className="item1" style={{display: "inline-flex"}} >
                <p className="item__work">Номер канала: {channel ? channel.id : null}</p>
                <p className="item__person" style={{paddingLeft: "10px"}}>Канал: {channel ? channel.nameChannel : null}</p>
                {/*<p className="item__work" style={{paddingLeft: "10px"}}>Передача: {transmission ? transmission.nameTransmission : null}</p>*/}
                {/*<p className="item__person" style={{paddingLeft: "10px"}}>Дата начала: {transmission ? transmission.dateStart : null}</p>*/}
                {/*<p className="item__birthday">Дата рождения: {props.data ? props.data.birthday : null}</p>*/}
                {/*<p className="item__gender">Пол: {props.data ? props.data.gender === "m" ? "мужской" : "женский" : null}</p>*/}
                {/*<p className="item__employ">Уволен: {props.data ? props.data.employ === true ? "да" : "нет" : null}</p>*/}
            </div>
        </div>
    );
}
