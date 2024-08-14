import React from 'react';
function Content(){
    return(
        <div class="cont">
            <div class="table">
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Roll_No</th>
                    <th>Name</th>
                    <th>College_Name</th>
                    <th>DEpartment</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>101001</td>
                    <td>Aarthi</td>
                    <td>HICET</td>
                    <td>IT</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>101002</td>
                    <td>Krishna</td>
                    <td>HICET</td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>101003</td>
                    <td>Madhan</td>
                    <td>HICET</td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>101004</td>
                    <td>Niroo</td>
                    <td>HICET</td>
                    <td>IT</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>101005</td>
                    <td>Siva</td>
                    <td>HICET</td>
                    <td>CSE</td>
                </tr>
            </table>
        </div>
        <div class="form">
            <form>
                <h1>login</h1>
                <label>Username</label>
                <input placeholder="Enter your Name"/><br/><br/>
                <label>Password</label>
                <input placeholder="Enter ypur Password"/><br/><br/>
                <button>Submit</button>
            </form>

        </div>
        
        
        </div>
    )
}
export default Content;     

        