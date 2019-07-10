let documenter = new Vue({
    el: '#FollowUpComponent',
    data() {
        return {
            Domain: '',
          
            IdentityValue: '000 0000 00000',
            FirstName: 'على',
            FatherName: 'محمد',
            GrandFatherName: 'انور',
            FamilyName: 'المحمدى',
           
            
        };
    },
    methods: {
   
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
                    documenter.targetId = response.data.docId;
                    documenterApplay.checkDocumenter();
                
            })
                .then(function (response) {
                    documenter.GetLicense();
                });

        },
        GetLicense() {

            var domn = this.Domain + 'api/DocumentrerAPI/GetDocumenter/';
            axios.post(domn, { IdentityValuee: documenter.IdentityValue }).then(function (response) {

                documenter.IdentityValue = response.data.identityValue;
                documenter.FirstName = response.data.firstName;
                documenter.FatherName = response.data.fatherName;
                documenter.GrandFatherName = response.data.grandFatherName;
                documenter.FamilyName = response.data.familyName;
                documenter.targetId = response.data.docId;
                documenterApplay.checkDocumenter();

            })
                .catch(function (error) {

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


