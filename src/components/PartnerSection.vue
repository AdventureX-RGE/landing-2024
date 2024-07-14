<template>
  <div :class="['children-item', sizeClass[size]]">
    <div class="img-box2 img" v-if="sizeClass[size] === 'level1' || sizeClass[size] === 'level2' ">
      <img :src="logo" alt="Logo" class="logo">
      {{ title }}
    </div>
    <div class="img-box1 img">
      <img :src="logo" alt="Logo" class="logo">
      {{ title }}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/dragon/Frame44.png'

export default {
  name: "PartnerSection",
  props: {
    size: {
      type: Number,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      sizeClass: ['level1', 'level2', 'level3', 'level4', 'level5'],
      logo
    }
  }
}
</script>

<style scoped>
.children-item {
  border: 4px solid #262626;
  background-color: #0F0F0F;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;

}


.level1 {
  div {
    img {
      width: 15%;
      aspect-ratio: 1/1;
    }
  }
}

.level2 {
  div {
    img {
      width: 14%;
      aspect-ratio: 1/1;
    }
  }

}

.level1, .level2, .level3 {
  position: relative;

  .img {
    font-size: 20px;
    font-weight: 600;
  }

  .img-box1 {
    transition: all 0.3s linear;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 10px;
    }
  }

  .img-box2 {
    transition: all 0.6s linear;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    opacity: 0;

    img {
      width: 12%;
      aspect-ratio: 1/1;
      margin-right: 3%;
    }
  }

  &.level2 {

    .img-box2 {
      margin-bottom: 3%;
    }
  }
}

.level1, .level2 {
  &:hover {
    .content {
      opacity: 1;
    }

    .img-box1 {
      opacity: 0;
    }

    .img-box2 {
      opacity: 1;
    }
  }
}

.level1, .level2 {
  padding: 5%;
  overflow: hidden;

  .content {
    width: 100%;
    height: 78%;
    padding: 3%;
    overflow: scroll;
    text-align: left;
    box-sizing: border-box;
    opacity: 0;
    transition: all 0.4s linear;

    &::-webkit-scrollbar {
      display: none;
    }
  }

}

.level3 {
  border-radius: 30px;
  display: flex;
  justify-content: start;


  img {
    width: 30%;
  }

}

.level4 {
  border-radius: 30px;
  position: relative;

  .img {
    font-size: 20px;
    font-weight: 600;
  }

  .img-box1 {
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    width: 30%;
    margin-right: 5%;
  }

}

.level5 {
  border-radius: 30px;
  position: relative;

  .img-box1 {
    position: absolute;
  }

  img {
    width: 50%;
  }
}
</style>