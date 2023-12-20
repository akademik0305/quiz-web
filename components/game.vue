<template>
  <div class="game">
    <!-- game head -->
    <div class="game__head">
      <div class="game-time">
        <div class="game-time__icon">
          <img src="~/assets/images/icons/timer.svg" alt="timer" />
        </div>
        <div class="game-time__main">
          <p class="game-time__desc">Time remaining</p>
          <h4 class="game-time__time">14 : 44 : 00</h4>
        </div>
      </div>
      <button class="game__submit base-button">Submit</button>
    </div>

    <!-- game main -->
    <div class="game__main game-main">
      <div class="game-main__row">
        <div class="game-main__left">
          <h4 class="game-main__title">Question 1 of 10</h4>
          <h3 class="game-main__question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad
            eos labore!
          </h3>
          <div class="game-main__answers">
            <!-- game answer 1 -->
            <div class="game-answer">
              <p class="game-answer__key">A)</p>
              <h4 class="game-answer__value">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque.
              </h4>
            </div>
            <!-- game answer 2 -->
            <div class="game-answer">
              <p class="game-answer__key">B)</p>
              <h4 class="game-answer__value">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
            </div>
            <!-- game answer 3 -->
            <div class="game-answer">
              <p class="game-answer__key">A.</p>
              <h4 class="game-answer__value">Answer</h4>
            </div>
            <!-- game answer 4 -->
            <div class="game-answer">
              <p class="game-answer__key">A.</p>
              <h4 class="game-answer__value">Answer</h4>
            </div>
          </div>
        </div>
        <!-- game progress -->
        <div class="game-main__right">
          <div class="game-progress">
            <div class="game-progress__body">
              <p class="game-progress__value">{{ percent / 10 }}/10</p>
            </div>
            <circle-progress
              class="game-progress__line"
              :percent="percent"
              :transition="200"
              :fill-color="'rgb(37, 60, 46)'"
              :size="180"
              :border-width="12"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- game footer pagination -->
    <div class="game__footer game-footer">
      <div class="game-footer__row">
        <button
          class="game-footer__prev base-button base-button--outline"
          @click="percent -= 10"
        >
          Prev
        </button>
        <div class="game-footer__pagination">
          <button
            class="game-footer__item"
            :class="{ active: item === 1 }"
            v-for="item in 10"
            item
          >
            {{ item }}
          </button>
        </div>
        <button
          class="game-footer__next base-button base-button--outline"
          @click="percent += 10"
        >
          Next
        </button>
        <div class="game-footer__media-btns">
          <button
            class="game-footer__prev base-button base-button--outline"
            @click="percent -= 10"
          >
            Prev
          </button>
          <button
            class="game-footer__next base-button base-button--outline"
            @click="percent += 10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import 'js-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css';
import CircleProgress from 'vue3-circle-progress';

const percent = ref(0);
</script>

<style lang="scss" scoped></style>
