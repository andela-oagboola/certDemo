categories = [{
    id: 1,
    text: 'Shackle'
}, {
    id: 2,
    text: 'Wire Rope Sling'
}, {
    id: 3,
    text: 'Gas Rack'
}, {
    id: 4,
    text: 'Open Top Container'
}, {
    id: 5,
    text: 'Lifting Frame'
}, {
    id: 6,
    text: 'Webbling Sling'
}]

wrapCategories = _.chain(categories);

examiners = [{
    id: 1,
    name: 'Theophilus Onwuka',
    qualification: 'LEEA, SNT LEVEL II MT, PT, & UT'
}, {
    id: 2,
    name: 'Mark Fish',
    qualification: 'FMLP, LEEA, NDT LEVEL II MT, PT & UT'
}, {
    id: 3,
    name: 'Sule Amao',
    qualification: 'LEEA, SNT LEVEL II MT, NDT LEVEL II MT'
}, {
    id: 4,
    name: 'Louisa Igbengbe',
    qualification: 'FMLP, LEEA, NDT LEVEL II MT, PT & UT'
}, {
    id: 5,
    name: 'Thomas Diepreye',
    qualification: 'LEEA, SNT LEVEL II MT, PT, & UT'
}]


equipments = [{
    id: 1,
    text: 'Shackle',
    equipID: 'A12, A13, A15',
    description: 'Bow Safety Pin Shackle'
}, {
    id: 2,
    text: 'Wire Rope Sling',
    equipID: 'WRS/2014',
    description: '13mm X 1.4m X 4 legged Sling c/w Quad master link assembly with ferrule secured thimble eyes at all ends'
}, {
    id: 3,
    text: 'Gas Rack',
    equipID: 'GR1, GR2, GR3',
    description: 'A steel construction Gas Rack in dimensions 1.07mtrs X 1.07mtrs X 2.09mtrs (Length X Width X Height) c/w 4 lifting points'
}, {
    id: 4,
    text: 'Open Top Container',
    equipID: 'DBN/OTC/002',
    description: 'A steel construction 20ft Open Top Container in dimensions 6.05m X 2.43m X 2.61m (Length X Width X Height) c/w 4 lifting points'
}, {
    id: 5,
    text: 'Lifting Frame',
    equipID: 'LF1, LF2',
    description: 'A steel construction GEC-2T Lifting Frame for GEC Coller in dimensions 3.18m X 2.48m X 0.25m (Length X Width X Height) c/w lifting points'
}, {
    id: 6,
    text: 'Webbling Sling',
    equipID: 'WES02',
    description: '9m Flat Woven webbing sling'
}, {
    id: 7,
    text: 'Shackle',
    equipID: 'A14',
    description: 'Bow Screw Pin Shackle'
}, {
    id: 8,
    text: 'Shackle',
    equipID: 'A19, A21',
    description: 'VA Safety Pin Shackle'
}]

assets = equipments;

wrapEquips = _(equipments);

certTypes = [{
    label: "Visual Examination",
    types: [{
        id: 1,
        name: "JCI-C-V-01"
    }]
}, {
    label: "Test, Examination and MPI",
    types: [{
        id: 2,
        name: "JCI-C-MPIT-01"
    }]
}]

wrapCTypes = _(certTypes)

manus = ['Cosby', 'WAS', 'STAS', 'REMA Hollande', 'DCD Design', 'Magtrol', 'Wichard'];

verdict = ['Requires maintenance', 'Fit for use', 'Unfit for use']
wrapVerdict = _(verdict);

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randInt(n) {
    return Math.floor(n * Math.random() + 1)
};

function randMinValue(n, m) {
    return Math.floor(n * Math.random() + m)
};

getEquiData = function(array) {

    return $.map(array, function(val, i) {

        equip = equipments[val];

        catId = wrapCategories.find({
            text: equip.text
        }).result('id').value();

        equip.qty = equip.equipID.split(',').length;

        data = {
            category: catId,
            manuName: randomChoice(manus),
            swl: Math.random().toFixed(2) + " tonnes"
        };

        return $.extend(equip, data);
    })
}
clientData = [{
    id: 1,
    name: 'Asaro Oil and Gas',
    email: 'info@asaro.com',
    equipment: getEquiData([0, 7, 3]),
    address: '12, Rumola Close Warri',
    base: {
        id: 1,
        name: '12, Rumola Close Warri'
    }
}, {
    id: 2,
    name: 'Eket Limited',
    email: 'contact@eketlimited.com',
    equipment: getEquiData([3, 4, 5, 6]),
    address: '9, Trans-Amadi Layout Portharcourt',
    base: {
        id: 1,
        name: '9, Trans-Amadi Layout Portharcourt'
    }
}, {
    id: 3,
    name: 'Sabina Investment',
    email: 'enquiry@sabinvest.com.ng',
    equipment: getEquiData([5, 3, 1]),
    address: '23, Ikot Avenue, Ikwerre, Rivers',
    base: {
        id: 1,
        name: 'Sabina Yard'
    }
}, {
    id: 4,
    name: 'Rivers Oil and Gas',
    email: 'info@riversoilandgas.com',
    equipment: getEquiData([4, 6, 2]),
    address: '3b, Government close, GRA, Rivers',
    base: {
        id: 1,
        name: '3b, Government close, GRA, Rivers'
    }
}, {
    id: 5,
    name: 'Total Refineries',
    email: 'mail@totalrefineries.com.ng',
    equipment: getEquiData([5, 0]),
    address: 'Total Base',
    base: {
        id: 1,
        name: 'Total Base'
    }
}, {
    id: 6,
    name: 'FBN',
    email: 'fbn@yahoo.com',
    equipment: getEquiData([6, 7, 2]),
    address: 'FBN Base',
    base: {
        id: 1,
        name: 'FBN Base'
    }
}]

wrapClientData = _(clientData);

createEventData = function() {

    return $.map(clientData, function(val, i) {

        val.title = "E";

        biRandValue = i == randInt(6) || i == randInt(6) ? Math.floor(moment().daysInMonth() * Math.random()) : randInt(180);

        val.affectedEquips = randInt(20);
        val.nAffectedEquips = randInt(val.affectedEquips);

        val.calendar = moment().add('days', biRandValue).calendar();

        val.start = moment().add('days', biRandValue).format('YYYY-MM-DD');

        return val;

    })
}

eventsDS = createEventData();

createCertificates = function(nTimes) {

    return _(_.times(nTimes, _.uniqueId)).map(function(id) {

        days = _.random(-365, 365, false);

        return new function() {
            var clientObj = _.sample(clientData);

            this.certId = id;
            this.client = clientObj.name;
            this.premise = clientObj.base.name;
            this.examiner = _.sample(examiners).name;
            this.equipments = _.chain(_.sample(equipments, _.random(1, 3, false))).map(function(e) {

                e.category = wrapCategories.find({
                    text: e.text
                }).result('id').value();
                e.qty = e.equipID.split(',').length;
                e.manuName = _.sample(manus)
                e.swl = Math.random().toFixed(2) + " tonnes"
                e.tareWT = Math.random().toFixed(2) + " tonnes"
                e.grossWT = (parseFloat(e.swl) + parseFloat(e.tareWT)).toFixed(2) + " tonnes"
                e.pla = ""
                return e;

            }).value();
            this.examDate = moment().add('days', days).format("DD/MM/YYYY");
            this.dueDate = moment().add('days', days).add('days', 180).format("DD/MM/YYYY");
            this.val = _.sample([true, false]);
            this.verdict = wrapVerdict.sample();
            this.type = wrapCTypes.pluck('types').sample()[0].name;

        };

    }).value();
}

genCerts = createCertificates(100);

generateEquipHistory = function(options) {

    var days = _.random(90, false);
    initdate = moment().subtract('y', options.n).subtract('d', days);

    accum = {
        moment: initdate,
        result: []
    }

    return _(_.times(options.n * 2 + 1, _.uniqueId)).foldl(function(accum, id) {

        var ids = options.equipment.equipID.split(',');
        var sampleSize = _.random(1, ids.length, false);

        hist = new function() {
            this.certId = id;
            this.examiner = _.sample(examiners).name;
            this.equipIDs = _.sample(ids, sampleSize);
            this.examDate = accum.moment.format("DD/MM/YYYY");
            this.dueDate = accum.moment.add('d', 180).format("DD/MM/YYYY");
            this.verdict = wrapVerdict.sample();
            this.type = wrapCTypes.pluck('types').sample()[0].name;
        };

        accum.result.push(hist);
        accum.moment = moment(hist.dueDate, "DD/MM/YYYY");

        return accum

    }, accum).result;
}


function compute(arr1, arr2) {

    a = _.invoke(arr1, String.prototype.trim);
    b = _.invoke(arr2, String.prototype.trim);

    return {
        isect: _.intersection(a, b),
        diff: _.xor(a, b)
    }

}

filterEquipIDs = function(source, history) {

    allEquipIds = _.invoke(source, String.prototype.trim);

    return _(history).foldr(function(accum, e) {

        if (accum.dontKnow.length != 0) {
            var equipIds = _.invoke(e.equipIDs, String.prototype.trim); //Trim possible whitespaces
            takeOut = _.xor(accum.know, equipIds); //Take out what we already know
            c = compute(takeOut, accum.dontKnow);

            //If we dont know enough and have learnt something new
            if (takeOut.length != 0 && accum.know.length != source.length && c.isect.length != 0) {

                accum.know = _.union(accum.know, c.isect); //Consolidate our knowledge
                accum.dontKnow = c.diff;

                instance = moment(e.dueDate, "DD/MM/YYYY");
                now = moment();
                data = {
                    certId: e.certId,
                    ids: c.isect.toString().replace(/[\s,]+/g, ', '),
                    isExpired: instance.isBefore(now),
                    when: instance.format("ddd, Do MMM YYYY")
                };
                // isExpired: instance.isBefore(now), when: instance.from(now) };
                accum.result.push(data)

            }
        }
        return accum;


    }, {
        result: [],
        know: [],
        dontKnow: allEquipIds
    }).result;
}


//our work starts from here
$('#equipments').DataTable({
    data: genCerts,
			columns: [
	        {"data": "certId"},
			    {"data": "client"},
			    {"data": "dueDate"},
			    {"data": "examDate"},
			    {"data": "type"},
			    {"data": "examiner"},
			    {"data": "verdict"}

	    ]
});

var table = $('#equipments').DataTable();

$('#equipments tbody').on('click', 'tr', function () {
    var certs = table.row( this ).data();
    $('#cert-table2 tbody').empty();
   generateCertificate(certs);
});

var generateCertificate = function(certs) {
    var examiner_qualification = "";
    examiners.map(function(examiner) {
        if(examiner.name === certs.examiner) {
            examiner_qualification = examiner.qualification;
        }
    });

    certTypes.map(function(certType){
        certType.types.map(function(type) {
            if(type.name === certs.type){
                $('#myModalLabel').html(certType.label);
            }
        })
    });

     certs.equipments.map(function(equipment) {
        var row = '<tr><td>' + equipment.equipID + '</td><td>' + equipment.qty+ '</td><td><h4>' + equipment.text + '</h4>' + equipment.description+ '</td><td>' + equipment.tareWT + '</td><td>' + equipment.swl + '</td><td>' + equipment.grossWT + '</td><td>' + equipment.pla + '</td>/tr>'
        $('#cert-table2 tbody').append(row);
    });
    $('#cert-table2 tbody tr').first().append('<td style="vertical-align:middle" rowspan=' +certs.equipments.length+ '>' + certs.dueDate + '</td>');
    $('#cert-num').html(certs.certId);
    $('#doe').html(certs.examDate);
    $('#examiner').html(certs.examiner);
    $('#qualifications').html(examiner_qualification);

    $('#address-name').html(certs.client)
    $('#address-premises').html(certs.premise);
     $('#myModal').modal();
};