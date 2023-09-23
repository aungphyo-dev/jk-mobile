import {Link} from "react-router-dom";

const Feature = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-3 h-auto mb-9'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[20px] md:text-[25px] font-semibold leading-[30px]'>When you buy online</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='bg-white p-5 text-center rounded-2xl'>
                    <h1 className='text-[20px] font-semibold mb-2'>Digital Payment Option</h1>
                    <p className='text-sm'>
                        Digital Payment များနှင့် ပေးချေမှုများကို မည်သည့်အတိုးနှုန်းမှ ထပ်ဆောင်းပေးဆောင်စရာမလိုပဲ 100% Banking Payment ဖြင့်ပေးချေနိုင်သည့်အပြင် International Payment များဖြစ်သော Visa, Master, UPI, JCB အစရှိသော Payment Cards အမျိုးအစားများနှင့်ဝယ်ယူနိုင်ရန်ဆောင်ရွက်ပေးထားပါသည်။
                    </p>
                </div>
                <div className='bg-white p-5 text-center rounded-2xl'>
                    <h1 className='text-[20px] font-semibold mb-2'>Delivery</h1>
                    <p className='text-sm mb-5'>
                        ၃သိန်းနှင့်အထက် ဝယ်ယူမှုများအတွက် ရန်ကုန်နှင့် မန္တလေးမြို့များကို Next Day Delivery ဖြင့် ပို့ဆောင်ပေးနေပါသည်
                    </p>
                    <Link to="#" className='underline text-blue-500'>
                        Read more about delivery service
                    </Link>
                </div>
                <div className='bg-white p-5 text-center rounded-2xl'>
                    <h1 className='text-[20px] font-semibold mb-2'>After Sale Service</h1>
                    <p className='text-sm mb-5'>
                        Factory faults will be replaced with new device in 7 days.
                    </p>
                    <Link to="#" className='underline text-blue-500'>
                        Read more about warranty policy
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;
