import {ref, reactive} from 'vue';

const weeks = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
let currentDate = null;
const currentMonth = ref(0);
const currentYear = ref(0);
const title = ref('');
const daysList = reactive([]);

function createCalendar() {
  const year = currentDate.getFullYear();
  currentYear.value = year;
  const month = currentDate.getMonth();
  currentMonth.value = month;
  const week = currentDate.getDay();
  const day = currentDate.getDate();
  // 处理标题
  title.value = `${year}年${month + 1}月${day}日${weeks[week]}`;
  // 获取这个月的第0天,得到上一个月的最后一天
  const prevLastDay = new Date(year, month, 0).getDate();
  // 获取下月的第0天,得到当前月份的最后一天
  const lastDay = new Date(year, month + 1, 0).getDate();
  // 当前月份第一天是星期几
  const weekByFirstDaY = new Date(year, month, 1).getDay();
  const lastIndex = weekByFirstDaY + lastDay - 1;
  daysList.length = 0;
  for (let index = 0; index < 42; index++) {
    // 上一个月的日期起始判断
    if (index < weekByFirstDaY) {
      const daysListItem = {year, month: month - 1, day: prevLastDay - weekByFirstDaY + index + 1, value: ''};
      const value = `${daysListItem.year}-${daysListItem.month}-${daysListItem.day}`;
      daysListItem.value = value;
      daysList.push(daysListItem);
    }
    // 索引大于当前月份第一天是星期几, 并且小于等于当前月份最后一天加上当前月份第一天是星期几
    if (index >= weekByFirstDaY && index <= lastIndex) {
      const daysListItem = {year, month, day: index - weekByFirstDaY + 1, value: ''};
      const value = `${daysListItem.year}-${daysListItem.month}-${daysListItem.day}`;
      daysListItem.value = value;
      daysList.push(daysListItem);
    }
    // 下一个月的日期判断
    if (index > lastIndex) {
      const daysListItem = {year, month: month + 1, day: index - lastIndex, value: ''};
      const value = `${daysListItem.year}-${daysListItem.month}-${daysListItem.day}`;
      daysListItem.value = value;
      daysList.push(daysListItem);
    }
  }
}

function prevMonth() {
  currentDate.setMonth(currentMonth.value - 1);
  createCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentMonth.value + 1);
  createCalendar();
}

function prevYear() {
  currentDate.setFullYear(currentYear.value - 1);
  createCalendar();
}

function nextYear() {
  currentDate.setFullYear(currentYear.value + 1);
  createCalendar();
}


function getCurrentDateValue() {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
}


export const useCalendar = (props, emit) => {
  currentDate = props.modelValue ? new Date(props.modelValue) : new Date();
  const currentDateValue = getCurrentDateValue();

  function onDayClick(data) {
    const value = `${data.year}-${data.month}-${data.day}`;
    emit('update:modelValue', value);
  }

  function toDay() {
    currentDate = new Date();
    createCalendar();
    emit('update:modelValue', currentDateValue);
  }


  createCalendar();
  return {
    title, daysList, prevMonth, nextMonth, toDay, onDayClick,
    nextYear, prevYear,currentDateValue
  };

};