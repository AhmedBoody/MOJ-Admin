let documenter = new Vue({
    el: '#documenterMainData',
    data() {
        return {
            Domain: '',
            LookupResult : {},
            IdentityValue: '000 0000 00000',
            FirstName: 'على',
            FatherName: 'محمد',
            GrandFatherName: 'انور',
            FamilyName: 'المحمدى',
            SexList: [],
            SexId: 0,
            CountryList: [],
            CountryId: 0,
            CitiesList: [],
            CityOBId: 0,
            CityAddressId:0,
            DistrictList: [],
            DistrictId: 0,
            HiJriDOB: '0000/00/00',
            DOB: '0000/00/00',
            IdentityImage: {},
            PersonalPic: {},
            IdentiyPicName: '',
            PersonalPicName : '' ,
            BuildingNumber: '',
            StreetName: '',
            Postal: '',
            AdditionalNumber:'',
            HomePhone: '',
            Mobile: '',
            Fax: '',
            Email: '',
         
            targetId: ''
           
            
        };
    },
    methods: {
        GetLookups () {
            var domn = this.Domain + 'api/LookUpData/GetLookUpDate/';
          
            //UPDATED TO GET DATA FROM WEB API
            axios.post(domn, { IdentityValuee : documenter.IdentityValue }).then(function (response) {
               
               

                documenter.LookupResult = response.data;
                documenter.SexList = documenter.LookupResult.sexModel;
                documenter.CountryList = documenter.LookupResult.countries;
                documenter.CitiesList = documenter.LookupResult.cities;
                documenter.DistrictList = documenter.LookupResult.district;
                documenter.CountryId = documenter.LookupResult.defaultCountryId;
                documenter.CityOBId = documenter.LookupResult.defaultCityOBId;
                documenter.CityAddressId = documenter.LookupResult.defaultCityAddressId;
                documenter.DistrictId = documenter.LookupResult.defaultDistrictId;
               
                documenter.GetDocumenter();
                })
                .catch(function (error) {
                    alert("ERROR: " + (error.message | error));
                });
        },
        GetDomain()
        {
            axios.post("/api/DocumenterMainData/GetDomain/").then(function (response) {

                documenter.Domain = response.data;
                
                documenter.GetLookups();


            });
                
            
        },
        GetDocumenter()
        {
            
            var domn = this.Domain + 'api/DocumentrerAPI/GetDocumenter/';
            axios.post(domn, { IdentityValuee: documenter.IdentityValue }).then(function (response) {

                    documenter.IdentityValue = response.data.identityValue;
                    documenter.FirstName = response.data.firstName;
                    documenter.FatherName = response.data.fatherName;
                    documenter.GrandFatherName = response.data.grandFatherName;
                    documenter.FamilyName = response.data.familyName;

                    documenter.SexId = response.data.sexId;
                    documenter.targetId = response.data.docId;
                    
                    documenter.CityOBId = response.data.cityOBId;

                    for (var i = 0; i < documenter.CitiesList.length; i++)
                    {
                        if (documenter.CitiesList[i].id == response.data.cityOBId)
                        {

                            documenter.CountryId = documenter.CitiesList[i].countryId;
                        }
                    }

                    for (var i = 0; i < documenter.DistrictList.length; i++)
                    {

                        if (documenter.DistrictList[i].id == response.data.districtId)
                        {

                            documenter.CityAddressId = documenter.DistrictList[i].cityId;
                        }

                    }
                    
                    documenter.DistrictId = response.data.districtId
                    documenter.HiJriDOB = response.data.hiJriDOB
                    documenter.DOB = response.data.dob
                    documenter.IdentityValue = response.data.identityValue
                    documenter.PersonalPicName = response.data.personalPicName
                    documenter.BuildingNumber = response.data.buildingNumber
                    documenter.StreetName = response.data.streetName
                    documenter.Postal = response.data.postal
                    documenter.AdditionalNumber = response.data.additionalNumber
                    documenter.HomePhone = response.data.homePhone
                    documenter.Mobile = response.data.mobile
                    documenter.Email = response.data.email
                    documenter.Fax = response.data.fax

                    documenterQualifications.GetAllQualifications();
                    documenterQualifications.GetAllJobs();
                    documenterQualifications.GetJusgmentandNotary();
                    documenterHealthStatment.GetHealthStatment();
                    $("#documenterMainData").find("label").addClass("active");

                    documenterApplay.checkDocumenter();
                
            })
                .catch(function (error) {
                   
                });

        },
        handleIdentityPicUpload($event) {
           
            let uploadedFiles = $event.target.files[0];

            /*
              Adds the uploaded file to the files array
            */
            
            documenter.IdentityImage = uploadedFiles;
            
        },
        handlePersonalPicUpload($event) {
            let uploadedFiles = $event.target.files[0];

            /*
              Adds the uploaded file to the files array
            */
           

                documenter.PersonalPic = uploadedFiles;
            
        },
        resetDest()
        {
            documenter.DistrictId = 0;

        },

        SaveMainData() {

            $('.validation').css('display', 'none');
            $('.input.form-control').removeClass("invalid");
            $('.input.form-control').addClass("valid");
            var domn = this.Domain + 'api/DocumentrerAPI/PostDocumenterMainData/';
            let formData = new FormData();
            formData.append('IdentityImage', documenter.IdentityImage);
            formData.append('PersonalPic', documenter.PersonalPic);
            formData.append('IdentityValue', documenter.IdentityValue);
            formData.append('FirstName', documenter.FirstName)
            formData.append('FatherName', documenter.FatherName)
            formData.append('GrandFatherName', documenter.GrandFatherName)
            formData.append('FamilyName', documenter.FamilyName)
            formData.append('SexId', documenter.SexId)
            formData.append('CountryId', documenter.CountryId)
            formData.append('CityOBId', documenter.CityOBId)
            formData.append('CityAddressId', documenter.CityAddressId)
            formData.append('DistrictId', $('#District_').val())
            formData.append('HiJriDOB', documenter.HiJriDOB)
            formData.append('DOB', documenter.DOB)
            formData.append('IdentiyPicName', documenter.IdentityValue)
            formData.append('PersonalPicName', documenter.PersonalPicName)

            formData.append('BuildingNumber', documenter.BuildingNumber)

            formData.append('StreetName', documenter.StreetName)

            formData.append('Postal', documenter.Postal)

            formData.append('AdditionalNumber', documenter.AdditionalNumber )

            formData.append('HomePhone', documenter.HomePhone)

            formData.append('Mobile', documenter.Mobile)

            formData.append('Fax', documenter.Fax)

            formData.append('Email', documenter.Email)


            //UPDATED TO GET DATA FROM WEB API
            axios.post(domn,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    debugger
                    //documenter.NextStep();
                
            }).catch(function (error) {
                debugger
                if (error.response.status == 400) {
                   
                        for (var i = 0; i < error.response.data.length; i++) {
                            $('#' + error.response.data[i].key).closest('.input.form-control').removeClass("valid");
                            $('#' + error.response.data[i].key).closest('.input.form-control').addClass("invalid");
                            $('#' + error.response.data[i].key).css('display', 'block');
                            $('#' + error.response.data[i].key).text(error.response.data[i].value);
                        }

                    }
                });
        },
        NextStep()
        {
              $('#custom-stepper').nextStep();
        }
       
    },
    computed: {
        isSubmitDisabled() {
            let isDisabled = true;

            if (
                this.targetId !== ''
            ) {
                isDisabled = false;
            }

            return isDisabled;


        }
    },
    created: function () {
        this.GetDomain();
       
    }
});

let documenterQualifications = new Vue({
    el: '#Qualifications',
    data() {
        return {
            DocumterQualificationId:0,
            Domain:'',
            Qualiflag:0,
            CountryList: [],
            Degrees : [],
            DegreeId: 0,
            Specialities : [],
            SpecialityId: 0,
            FromAuthority: '',
            GraduationDate: '',
            CertifFile: {} ,
            CertificatePicName: '',
            CountryQualiId: 0,
            AllQualifications: [],
            QualiId : 0 ,
            AllJobs: [],
            Experienceflag: 0, 
            DocJobId : 0 ,
            Job: '',
            JobLocation: '',
            From: '',
            To: '',
            JobCountryId: '',
            ExperienceCertifFile: {},
            ExperienceCertificateName: '',
           
            AreUJudgementCareer: 0,
            AreUNotaryCareer: 0,
        };
    },
    methods: {
        GetDomain() {
            axios.post("/api/DocumenterMainData/GetDomain/").then(function (response) {

                documenterQualifications.Domain = response.data;
                documenterQualifications.GetLookups();

            });


        },
        SaveJudgmentRadio() {
            

            axios.post(documenter.Domain +"/api/DocumentrerAPI/SaveJudgmentRadio/", { AreUJudgementCareer: documenterQualifications.AreUJudgementCareer , DocumenterId: documenter.targetId }).then(function (response) {

              

            });


        },

        SaveNotaryRadio() {

            axios.post(documenter.Domain + "/api/DocumentrerAPI/SaveNotaryRadio/", { AreUNotaryCareer: documenterQualifications.AreUNotaryCareer, DocumenterId: documenter.targetId }).then(function (response) {



            });

        },
        GetLookups() {

            var domn = documenterQualifications.Domain + 'api/LookUpData/GetLookUpDate/';

            //UPDATED TO GET DATA FROM WEB API
            axios.post(domn, { IdentityValuee: documenter.IdentityValue }).then(function (response) {

                documenterQualifications.CountryList = response.data.countries;

                documenterQualifications.Degrees = response.data.degrees;

                documenterQualifications.Specialities = response.data.specialities;

            })
                .catch(function (error) {
                    alert("ERROR: " + (error.message | error));
                });
        },
        GetAllQualifications() {
          
            var domn = documenter.Domain + 'api/DocumentrerAPI/GetAllQualifications/';
            axios.post(domn, { DocumenterId: documenter.targetId }).then(function (response) {
                 
                documenterQualifications.AllQualifications = response.data;
               

            })
                .catch(function (error) {

                });

        },
        GetAllJobs() {

            var domn = documenter.Domain + 'api/DocumentrerAPI/GetAllJOBS/';
            axios.post(domn, { DocumenterId: documenter.targetId }).then(function (response) {
                documenterQualifications.AllJobs = response.data;
            })
                .catch(function (error) {

                });

        },
        GetJusgmentandNotary() {

             ;
            var domn = documenter.Domain + 'api/DocumentrerAPI/GetJusgmentandNotary/';
            axios.post(domn, { DocumenterId: documenter.targetId }).then(function (response) {


                alert(response.data[0].areUNotaryCareer)
                if (response.data[0].areUJudgementCareer == true)
                {

                    documenterQualifications.AreUJudgementCareer = 1;
                }
                else {

                    documenterQualifications.AreUJudgementCareer = 0;
                }


                if (response.data[0].areUNotaryCareer == true)
                {

                    documenterQualifications.AreUNotaryCareer = 1;
                }
                else
                {

                    documenterQualifications.AreUNotaryCareer = 0;
                }
                console.log(response.data);

            })
                .catch(function (error) {

                });

        } ,
        GetNameDegree(id)
        {
             ;
            for (var i = 0; i < documenterQualifications.Degrees.length; i++) {
                if (documenterQualifications.Degrees[i].id == id) {

                    return documenterQualifications.Degrees[i].arabicName;
                }
            }

        },
        GetNameCountry(id) {
             ;
            for (var i = 0; i < documenterQualifications.CountryList.length; i++) {
                if (documenterQualifications.CountryList[i].id == id) {

                    return documenterQualifications.CountryList[i].arabicName;
                }
            }

        },

        GetNameSpeciality(id) {
           
            for (var i = 0; i < documenterQualifications.Specialities.length; i++) {
                if (documenterQualifications.Specialities[i].id == id) {

                    return documenterQualifications.Specialities[i].arabicName;
                }
            }

        },

        EditQualification(id,DegreeId,SpecialityId,CountryId,Fromauth,Date,Imagename )
        {
            documenterQualifications.DegreeId = DegreeId;
            documenterQualifications.SpecialityId = SpecialityId;
            documenterQualifications.CountryQualiId = CountryId;
            documenterQualifications.FromAuthority = Fromauth;
            documenterQualifications.GraduationDate = Date;
            documenterQualifications.DocumterQualificationId = id;
            documenterQualifications.Qualiflag = 1;
            $("#centralModalLg").find("label").addClass("active");
        },  

        AddQualification()
        {
            documenterQualifications.DegreeId = 0;
            documenterQualifications.SpecialityId = 0;
            documenterQualifications.CountryQualiId = 0;
            documenterQualifications.FromAuthority = '';
            documenterQualifications.GraduationDate = '';
            documenterQualifications.DocumterQualificationId = id;
            documenterQualifications.Qualiflag = 0;
        },
        AddJob()
        {
            documenterQualifications.Job = '';
            documenterQualifications.From = '';
            documenterQualifications.To = '';
            documenterQualifications.JobLocation = '';
            documenterQualifications.JobCountryId = 0;
            documenterQualifications.DocJobId = 0;
            documenterQualifications.Experienceflag = 0;
        },
        EditJob(id, Job, From, To, JobLocation, JobCountryId)
        {
            documenterQualifications.DocJobId = id;
            documenterQualifications.Job = Job;
            documenterQualifications.From = From;
            documenterQualifications.To = To;
            documenterQualifications.JobLocation = JobLocation;
            documenterQualifications.JobCountryId = JobCountryId;
            documenterQualifications.Experienceflag = 1;
            $("#centralModalLg2").find("label").addClass("active");
        },  
        handlCertifFile($event) {


            let uploadedFiles = $event.target.files[0];

            /*
              Adds the uploaded file to the files array
            */

            documenter.CertifFile = uploadedFiles;

        },
        handlExperienceCertifFile($event) {
            let uploadedFiles = $event.target.files[0];

            /*
              Adds the uploaded file to the files array
            */


            documenter.ExperienceCertifFile = uploadedFiles;

        },
        resetDest() {
            documenter.DistrictId = 0;

        },
        SaveQualificationData() {


           
            if (documenterQualifications.Qualiflag == 0)
            {
                var domn = this.Domain + 'api/DocumentrerAPI/PostDocumenterQualification/';

                let formData = new FormData();
                formData.append('DegreeId', documenterQualifications.DegreeId);
                formData.append('SpecialityId', documenterQualifications.SpecialityId);
                formData.append('FromAuthority', documenterQualifications.FromAuthority);
                formData.append('GraduationDate', $('#GradDate').val())
                formData.append('CertifFile', documenterQualifications.CertifFile)
                formData.append('DocumenterId', documenter.targetId)

                formData.append('CountryQualiId', documenterQualifications.CountryQualiId)



                //UPDATED TO GET DATA FROM WEB API
                axios.post(domn,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(function (response) {

                        documenterQualifications.GetAllQualifications();
                    })
                    .catch(function (error) {
                        alert("ERROR: " + (error.message | error));
                    });
            }
            else {
                var domn = this.Domain + 'api/DocumentrerAPI/EditDocumenterQualification/';
                let formData = new FormData();
                formData.append('Id', documenterQualifications.DocumterQualificationId);
                formData.append('DegreeId', documenterQualifications.DegreeId);
                formData.append('SpecialityId', documenterQualifications.SpecialityId);
                formData.append('FromAuthority', documenterQualifications.FromAuthority);
                formData.append('GraduationDate', $('#GradDate').val())
                formData.append('CertifFile', documenterQualifications.CertifFile)
                formData.append('DocumenterId', documenter.targetId)
                formData.append('CountryQualiId', documenterQualifications.CountryQualiId)



                //UPDATED TO GET DATA FROM WEB API
                axios.post(domn,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(function (response) {

                        documenterQualifications.GetAllQualifications();
                    })
                    .catch(function (error) {
                        alert("ERROR: " + (error.message | error));
                    });

            }


          
        },
        SaveJobData()
        {
            
            if (documenterQualifications.Experienceflag == 0)
            {

                var domn = this.Domain + 'api/DocumentrerAPI/PostDocumenterJob/';

                let formData = new FormData();
                formData.append('Job', documenterQualifications.Job);
                formData.append('From', documenterQualifications.From);
                formData.append('To', documenterQualifications.To);
                formData.append('JobLocation', documenterQualifications.JobLocation)
                formData.append('JobCountryId', documenterQualifications.JobCountryId)
                formData.append('DocumenterId', documenter.targetId)
                
                //UPDATED TO GET DATA FROM WEB API
                axios.post(domn,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(function (response) {

                        documenterQualifications.GetAllJobs();
                    })
                    .catch(function (error) {
                        alert("ERROR: " + (error.message | error));
                    });
            }
            else
            {
                var domn = this.Domain + 'api/DocumentrerAPI/EditDocumenterJob/';
                let formData = new FormData();
                formData.append('Id', documenterQualifications.DocJobId);
                formData.append('Job', documenterQualifications.Job);
                formData.append('From', documenterQualifications.From);
                formData.append('To', documenterQualifications.To);
                formData.append('JobLocation', documenterQualifications.JobLocation)
                formData.append('JobCountryId', documenterQualifications.JobCountryId)
                formData.append('DocumenterId', documenter.targetId)


                //UPDATED TO GET DATA FROM WEB API
                axios.post(domn,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(function (response) {

                        documenterQualifications.GetAllJobs();
                    })
                    .catch(function (error) {
                        alert("ERROR: " + (error.message | error));
                    });

            }
        },
    },
    computed: {
        isSubmitDisabled() {
            let isDisabled = true;

            if (
                this.targetId !== ''
            ) {
                isDisabled = false;
            }

            return isDisabled;


        }
    },
    created: function () {
        this.GetDomain();
       

    }
});

let documenterHealthStatment = new Vue({
    el: '#HealthState',
    data() {
        return {
            HasMedicalFile: 0,
            HosPitalId: 0,
            Hospitals: [],
            MedicalFile: {}
        };
    },
    methods: {
        GetDomain() {
            axios.post("/api/DocumenterMainData/GetDomain/").then(function (response) {

                documenterHealthStatment.Domain = response.data;
                documenterHealthStatment.GetLookups();

            });


        },
     
        GetLookups() {
            
            var domn = documenterHealthStatment.Domain + 'api/LookUpData/GetLookUpDate/';
            //UPDATED TO GET DATA FROM WEB API
            axios.post(domn, { IdentityValuee: documenter.IdentityValue }).then(function (response) {

                console.log(response.data)

                documenterHealthStatment.Hospitals = response.data.hospitals;

                

            }).catch(function (error) {
                alert("ERROR: " + (error.message | error));
            });
                
        },
        GetHealthStatment() {

            var domn = documenter.Domain + 'api/DocumentrerAPI/GetMedicalRecord/';
            axios.post(domn, { DocumenterId: documenter.targetId }).then(function (response) {

                if (response.data.hasMedicalFile == true)
                {
                    documenterHealthStatment.HasMedicalFile = 1;
                }
                else {
                    documenterHealthStatment.HasMedicalFile = 0;
                }

                documenterHealthStatment.HosPitalId = response.data.hosPitalId;
                console.log(response.data);


            })
                .catch(function (error) {

                });

        },

        handlMedicalFile($event) {


            let uploadedFiles = $event.target.files[0];

            /*
              Adds the uploaded file to the files array
            */

            documenterHealthStatment.MedicalFile = uploadedFiles;

        },
      
        SaveHealthData() {

            
                var domn = this.Domain + 'api/DocumentrerAPI/SaveMedicalRecord/';

                let formData = new FormData();
                formData.append('HosPitalId', documenterHealthStatment.HosPitalId);
                formData.append('HasMedicalFile', documenterHealthStatment.HasMedicalFile);
                formData.append('MedicalFile', documenterHealthStatment.MedicalFile);
                formData.append('DocumenterId', documenter.targetId);

              

                //UPDATED TO GET DATA FROM WEB API
                axios.post(domn,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(function (response) {

                        documenterQualifications.GetAllQualifications();
                    })
                    .catch(function (error) {
                        alert("ERROR: " + (error.message | error));
                    });
            
            



        }
       
    },
    computed: {
        isSubmitDisabled() {
            let isDisabled = true;

            if (
                this.targetId !== ''
            ) {
                isDisabled = false;
            }

            return isDisabled;


        }
    },
    created: function () {
        this.GetDomain();
       

    }
});

let documenterApplay = new Vue({
    el: '#Applayy',
    data() {
        return {
          
            NotaryId: 0,
            NotaryTypes: [],
            Accept: 0,
            HasRequest : 0
        };
    },
    methods: {
        GetDomain() {
            axios.post("/api/DocumenterMainData/GetDomain/").then(function (response) {

                documenter.Domain = response.data;
                
                documenterApplay.GetLookups();

            });


        },
        checkDocumenter()
        {
             ;
            var domn = documenter.Domain + 'api/DocumentrerAPI/checkrequest/';
            //UPDATED TO GET DATA FROM WEB API
            axios.post(domn, { DocumenterId : documenter.targetId }).then(function (response) {

                console.log(response.data);
                documenterApplay.HasRequest = response.data;
                
               



            }).catch(function (error) {
                alert("ERROR: " + (error.message | error));
            });

        },


        GetLookups() {

            var domn = documenter.Domain + 'api/LookUpData/GetLookUpDate/';
            //UPDATED TO GET DATA FROM WEB API
            axios.post(domn, { IdentityValuee: documenter.IdentityValue }).then(function (response) {

                

                documenterApplay.NotaryTypes = response.data.notaryTypes;



            }).catch(function (error) {
                alert("ERROR: " + (error.message | error));
            });

        },


        Applay() {
             ;
            axios.post(documenter.Domain + "/api/DocumentrerAPI/Applay/",
                {
                    NotaryId: documenterApplay.NotaryId,
                    DocumenterId: documenter.targetId,
                    Accept: documenterApplay.Accept
                })
                .then(function (response) {



            });

        },
    },
    computed: {
        isSubmitDisabled() {
            let isDisabled = true;

            if (
                this.targetId !== ''
            ) {
                isDisabled = false;
            }

            return isDisabled;


        }
    },
    created: function () {
        this.GetDomain();


    }
    });