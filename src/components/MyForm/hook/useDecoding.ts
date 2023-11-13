import text from "../../../utils/text/text";

const useDecoding = () => {

    function putDate (date: string) {
 console.log(date)

 const themData = {
    firstPurpose: 0,
 }

const dataArr = date.split("-");

const slicedData = {
  year: parseInt(dataArr[0]),
  month: parseInt(dataArr[1]),
  day: parseInt(dataArr[2]),      
}

// Тема 3.1 первое предназначение
// Если день рождения больше 22 — складываем
// Если меньшн омтавляем (23 = 2 + 3 = 5)
// 
if (slicedData.day > 22) {
    themData.firstPurpose = Math.floor(slicedData.day / 10) + slicedData.day % 10;
} else {
    themData.firstPurpose = slicedData.day;
}
console.log(text[themData.firstPurpose] )

//Тема 3.2. Второе предназначение

//Тема 3.3. Третье предназначение






    }

    return {putDate}

}

export default useDecoding;