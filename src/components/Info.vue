<template>
  <section class="info">
    <h1
      class="info__title"
    >Become an official member of ChinesePod’s Affiliate Program and start earning money today.</h1>
    <div class="info-steps">
      <h2 class="info-steps__title">It is as simple as this:</h2>
      <div class="container">
        <div class="info-step info-step--red">
          <i class="fas fa-sign-in-alt"></i>
          <h3 class="info-step__title">Join</h3>
          <p class="info-step__description">
            Click the link below to register for an affiliate account with ChinesePod.
            Once your site has been approved, you will receive a confirmation e-mail and your very own unique
            Affiliate ID that will track your commission.
          </p>
        </div>
        <div class="info-step info-step--blue">
          <i class="fa fa-share-alt"></i>
          <h3 class="info-step__title">Share</h3>
          <p class="info-step__description">
            Share your love for ChinesePod by recommending ChinesePod on your website with your unique affiliate code.
            We have a library of web banners in a variety of sizes and designs available for your immediate use.
          </p>
        </div>
        <div class="info-step info-step--green">
          <i class="fas fa-dollar-sign"></i>
          <h3 class="info-step__title">Earn</h3>
          <p class="info-step__description">
            You will earn up to $50 USD commission for every new ChinesePod subscriber that was referred from your website.
            You will be able to track your earnings from your website on your personal affiliate page to see how you are doing.
          </p>
        </div>
      </div>
    </div>

    <div class="info-how-work">
      <h2 class="block-title info-how-work__title">How Does It Work?</h2>
      <p class="info-how-work__description">
        After becoming a ChinesePod affiliate partner, you will be able to embed your Affiliate ID on any link on your site
        that sends users to ChinesePod us to track conversions. This Affiliate ID will allow us to track users from your website
        that purchase a subscription for up to 90 days after they have clicked the link. If the referred user purchases a subscription
        in this 90 day period, you will receive a commission dependant on the Plan that is purchased.
        We will send a payment directly to your Paypal account 30 days after the end of the current month,
        once your total accumulative commission has exceeded $100 USD.
      </p>
    </div>
    <div class="info-commission">
      <h2 class="block-title info-commission__title">Affiliate Commision</h2>
      <p
        class="info-commission__description"
      >When a user signs up using your affiliate link, we will give you a commission depending on the package that the referred user signs up for. For example:</p>
      <ul class="info-commission__list">
        <li
          class="info-commission__list-item"
        >If a referred user signs up for a Monthly Premium Subscription you earn $25.00.</li>
        <li
          class="info-commission__list-item"
        >If a referred user signs up for a Basic or Premium Annual Subscription you earn $50.00.</li>
      </ul>
      <p
        class="info-commission__description info-commission__description--strong"
      >If you love ChinesePod and want to make some extra money by recommending it on your website, click the link below to register for your official affiliate account.</p>
    </div>

    <div class="info-cta">
      <span @click="$emit('show-popup', isShowPopup)">Contact Us</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
  data: () => ({
    isShowPopup: true
  })
};
</script>

<style lang="scss">
$red: #d9534f;
$blue: #5bc0de;
$green: #449d44;
$strong-red: #e1001e;

.block-title {
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 10px;
}

.info {
  flex: 1;
  padding: 16px;
  margin-bottom: 40px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  color: #333;

  &__title {
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 36px;
    text-align: center;
  }
}

.info-steps {
  &__title {
    text-align: center;
    margin: 0;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
}

.info-step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 300;
  }

  &__description {
    margin-top: 0;
    padding: 0 16px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 18px;
  }

  &--red {
    .info-step__title,
    svg path {
      color: $red;
    }
  }

  &--blue {
    .info-step__title,
    svg path {
      color: $blue;
    }
  }

  &--green {
    .info-step__title,
    svg path {
      color: $green;
    }
  }
}

.info-commission {
  &__description {
    &--strong {
      font-weight: 700;
    }
  }
}

.info-cta {
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  color: #fff;

  span {
    padding: 10px 16px;
    border-radius: 50px;
    width: fit-content;
    cursor: pointer;
    border: 1px solid $strong-red;
    background-color: $strong-red;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fff;
      color: $strong-red;
    }
  }
}

.info__email-popup {
  position: fixed;
  // display: flex;
  // width: 400px;
  // height: 200px;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.05);
  z-index: 99;

  form {
  }
}
</style>