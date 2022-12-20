import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, middle,last,address,district,states,pin } = existingUser[0];
  const [values, setValues] = useState({
    name,
    middle,
    last,
    address,
    district,
    states,
    pin
  });

  const handleEditUser = () => {
    setValues({ name: '', middle: '', last: '', address: '', district:'', states:'', pin:''});
    dispatch(editUser({
      id: params.id,
      name: values.name,
      middle: values.middle,
      last: values.last,
      address: values.address,
      district:values.district,
      states:values.states,
      pin:values.pin
    }));
    navigate('/');
  }

  return (
    <div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Vivaanss Technical Assignment</h3>
              <p class="mt-1 text-sm text-gray-600">
                You can add or onboard a new farmer details.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                      <input value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="middle_name" class="block text-sm font-medium text-gray-700">Middle name</label>
                      <input type="text" name="middle_name" id="middle_name" 
                        value={values.middle}
                        onChange={(e) => setValues({ ...values, middle: e.target.value })}autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" name="last_name" id="last_name" 
                        value={values.last}
                        onChange={(e) => setValues({ ...values, last: e.target.value })}autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6">
                      <label for="street_address" class="block text-sm font-medium text-gray-700">Village Name</label>
                      <input type="text" name="street_address" id="street_address" 
                        value={values.address}
                        onChange={(e) => setValues({ ...values, address: e.target.value })}autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label for="district" class="block text-sm font-medium text-gray-700">District</label>
                      <input type="text" name="city" id="district" 
                        value={values.district}
                        onChange={(e) => setValues({ ...values, district: e.target.value })}class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="country" class="block text-sm font-medium text-gray-700">State</label>
                      <select value={values.states} onChange={(e) => setValues({ ...values, states: e.target.value })} id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Bihar</option>
                        <option>Rajasthan</option>
                        <option>Gujarat</option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                      <input type="text" name="postal_code" id="postal_code" 
                        value={values.pin}
                        onChange={(e) => setValues({ ...values, pin: e.target.value })}autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button onClick={handleEditUser} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser