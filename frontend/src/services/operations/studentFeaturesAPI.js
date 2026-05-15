import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";


const { COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints;

// ================ buyCourse ================ 
// Payment functionality disabled - Razorpay integration removed
export async function buyCourse(token, coursesId, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");

    try {
        toast.error("Payment functionality is currently disabled. Please contact support.");
        return;
    }
    catch (error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error("Payment functionality is currently disabled");
    }
    toast.dismiss(toastId);
}


// ================ send Payment Success Email ================
// Payment functionality disabled - Razorpay integration removed
async function sendPaymentSuccessEmail(response, amount, token) {
    try {
        console.log("Payment success email functionality disabled");
    }
    catch (error) {
        console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
    }
}


// ================ verify payment ================
// Payment functionality disabled - Razorpay integration removed
async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    dispatch(setPaymentLoading(true));

    try {
        toast.error("Payment verification is currently disabled");
    }
    catch (error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        toast.error("Could not verify Payment");
    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}