<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title> Distribution List - Add or Remove Member</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  </head>
  <body>
    <header>
    <h1> Distribution List - Add or Remove Member</h1>
  </header>
    <div class="jumbotron">
      <div id="intro">
      </div>
      <form action="mailto:dylanb@lynden.com" method="POST" style="padding-top:10px;">
      <div class="row col-md-4 col-md-4">
      <label for="companyName">Company Name:</label>
      <select id="companyName" class="form-control" name="companyName">
        <option selected>Choose...</option>
        <option>LAF</option>
        <option>LCC</option>
        <option>LILCO</option>
      </select>
    </div>
    <div class="col-md-4">
          <label for="mailGroup">Mail Group Name:</label>
          <input type="text" class="form-control" id="mailGroup" name="mailGroup">
        </div>
        <!-- <div class="form-group col-md-2">
          <label for="opt">Add or Remove:</label>
          <select id="choice" class='form-control'>
            <option>Add</option>
            <option>Remove</option>
          </select>
        </div> -->




    <div class="col-xs-12">
         <div id="field">
              <div id="field0">
              <!-- Text input-->
                  <div class="form-row fieldz">
                    <div class="form-group col-md-2">
                      <label class="control-label" for="members">Member</label>
                       <!--dd class is for capturing input field data-->
                          <input id="members" name="members" type="text" class="form-control input-md dd">
                          </div>

                              <!-- Text input-->
                   <div class="form-group col-md-2">
                              <label class=" control-label" for="add">Add</label>
                                  <input id="add" name="add" value="1" type="checkbox" class="form-control input-md dd">
                   </div>
                     <div class="form-group col-md-2">
                              <label class=" control-label" for="remove">Remove</label>
                                  <input id="remove" name="remove" value="2" type="checkbox" class="form-control input-md xx">
                        </div>
                      </div>
                  </div>
                  <!-- Button -->
                  <div class="form-group">
                      <div class="col-md-4">
                          <button id="add-more" name="add-more" class="btn btn-primary" style="margin:0 250px;">Add More</button>
                      </div>
                  </div>
              </div>
          </div>
          <button> submit Form?</button>
        </form>

    <!-- <form>
  <div class="container">
<div class="row">
  <input type="hidden" name="count" value="1" />
      <div class="control-group" id="fields">
          <label class="control-label" for="field1">Members (full name only)</label>
          <div class="controls" id="profs">
              <form class="input-append">
                  <div id="field">
                    <div class="row">

                    <input autocomplete="off" class="input form-control fieldz" id="field1" name="prof1" type="text" placeholder="Add members" data-items="8"/>
                    <label for="add1"> Add Employee?</label>
                    <input type="checkbox" class="input fieldz" id="add1">
                    <label for="remove1">Remove Employee?></label>
                    <input type="checkbox" class="input fieldz" id="remove1">

                    <button id="b1" class="btn add-more" type="button">+</button>
                  </div>
                  </div>
              </form>
              <br>
              <small><strong>Press + to add another member</strong></small>
            </div>
          </div>
      </div>
    </div>
  </form> -->
  <div class="container col-md-6">
  <button type="submit" onclick="sendMail();return false" class="btn btn-primary">Submit</button>

</div>
<script src="assets/JS/distributionList.js"></script>
  </body>
</html>
