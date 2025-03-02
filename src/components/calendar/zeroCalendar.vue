<template>
  <div class="zero-calendar">
    <header>
      <div class="btn" @click="prevYear">
        <zeroIcon name="angles-left" color="white"></zeroIcon>
      </div>
      <div class="btn" @click="prevMonth">
        <zeroIcon name="angles-left" color="white"></zeroIcon>
      </div>
      <div class="current-Year">
        <span>{{ title }}</span>
        <div class="today" @click="toDay">当天</div>
      </div>
      <div class="btn" @click="nextMonth">
        <zeroIcon name="angles-right" color="white"></zeroIcon>
      </div>
      <div class="btn" @click="nextYear">
        <zeroIcon name="angles-right" color="white"></zeroIcon>
      </div>
    </header>
    <div class="calendar">
      <div class="week">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <div class="days">
        <div
            @click="onDayClick(data)"
            :class="['day',{'selected':data.value === modelValue}
            ,{'is-current':currentDateValue === data.value}]"
            v-for="(data,index) of daysList" :key="index">
          {{ data.day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import zeroIcon from '../icon/zeroIcon.vue';
import {useCalendar} from './useCalendar.js';


defineOptions({
  name: 'zeroCalendar'
})

const props = defineProps({
  modelValue: {
    type: [String, Object],
    default: '',
    required: true,
  }
});

const emit = defineEmits(['update:modelValue']);

const {
  title,
  daysList,
  nextMonth,
  prevMonth,
  toDay,
  onDayClick,
  prevYear,
  nextYear,
  currentDateValue
} = useCalendar(props, emit);
</script>

<style scoped lang="scss">
.zero-calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-bottom: 1px solid var(--bg-color);
  border-right: 1px solid var(--bg-color);
  box-sizing: border-box;

  header {
    width: 400px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-color);
    border-top: 1px solid var(--bg-color);
    box-sizing: border-box;
    user-select: none;

    .current-Year {
      font-weight: bold;
      font-size: 14px;
      color: white;
      display: flex;
      align-items: center;

      .today {
        font-size: 12px;
        color: white;
        border: 1px solid white;
        margin-left: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        border-radius: 2px;
      }
    }

    //button {
    //  color: purple;
    //  background-color: var(--bg-color);
    //  border: none;
    //  padding: 5px 20px;
    //
    //  &:active {
    //    background-color: deeppink;
    //    color: white;
    //  }
    //}
  }

  .calendar {
    width: 100%;
    box-sizing: border-box;

    .week {
      display: flex;

      > div {
        flex: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        font-weight: bold;
        color: var(--font-color);
        border-left: 1px solid var(--bg-color);
        border-top: 1px solid var(--bg-color);
      }
    }

    .days {
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(7, 1fr);

      .day {
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: var(--font-color);
        border-left: 1px solid var(--bg-color);
        border-top: 1px solid var(--bg-color);

        &:hover {
          color: var(--bg-color);
        }

        &.is-current {
          color: var(--bg-color);
        }

        &.selected {
          background-color: var(--hover-bg-color);
          color: white;
        }
      }
    }
  }
}
</style>