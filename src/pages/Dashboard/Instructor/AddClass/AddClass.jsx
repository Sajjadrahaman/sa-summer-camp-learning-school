import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ima_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const AddClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${ima_hosting_token}`;



    const onsubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const {name, availableSeats, price,}= data;
                    const NewClass = {instructor_name: user?.displayName, email: user?.email , name, availableSeats: parseFloat(availableSeats), price: parseFloat(price), image:imgURL}
            
                    console.log(NewClass)

                    axiosSecure.post('/classes', NewClass)
                    .then(data =>{
                        console.log('after posting new class', data.data)
                        if(data.data.insertedId){
                            reset()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              }) 
                        }
                    })


                }
            })
    };




    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-center font-bold text-3xl text-teal-600">Add Class</h2>
            <form onSubmit={handleSubmit(onsubmit)} className="w-full mt-5">

                <div className="grid grid-cols-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Type here" defaultValue={user?.displayName}   {...register("instructor_name", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.instructor && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" placeholder="Type here" defaultValue={user?.email} {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("availableSeats", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-600'>This field is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input  file-input-bordered w-full max-w-xs" />
                        {errors.classImage && <span className='text-red-600'>This field is required</span>}
                    </div>
                </div>

                <input className="btn mt-5 text-white bg-teal-600  hover:bg-teal-900" type="submit" value="Add Class" />
            </form>

        </div>
    );
};

export default AddClass;