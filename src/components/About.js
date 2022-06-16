import React from 'react'

export default function About() {
    return (
        <div className="container mt-5">
            <div class="row">

                
                    <div class="col-sm-3 col-md-6 col-lg-4 mr-2">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mark345</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@jacob409</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8 my-1">
                            <h5> It is an online text editor developed for editing plain text. </h5> <br />
                            Word Count: It allows you to check the total number of words written or pasted. <br />
                            Character Count: You can also check the exact number of characters in your writing by using this feature. It will promptly count and display it.
                    </div>
            </div>
        </div>
    )
}
