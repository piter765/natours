/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
// import {loadStripe} from "@stripe/stripe-js";
import Stripe from 'stripe';
const stripe = Stripe('pk_test_51Mc3S3GKGi8NECChHqEstBYZZxLhpli1A3G53X6jHYl73gT1PsyorFRdNSSPdMourENQQmqepat6GM27sJFtCAbD003nifyIQ1');
export const bookTour = async tourId => {
  try {
  
  //1) Get checkout session from API
  const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
  //console.log(session);
  //2) Create checkout form + charge credit card 
  window.location.replace(session.data.session.url);
  // await stripe.redirectToCheckout({
  //   sessionId: ses/sion.data.session.id
  // });

  } catch(err) {
    //console.log(err);
    showAlert('error', err);
  }

}