//Align div center __ && |
.container{
    display: flex;
    justify - content: center;
    align - items: center;
}

(OR)

    .container{
    display: grid;
    place - items: center;
}

//-------------------------------------------------------------------------------------

//Query Params
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//-------------------------------------------------------------------------------------

//Merge Objects
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

//-------------------------------------------------------------------------------------
//unique objects in array
[...new Set(this.state.LeftTableApiData.map(item => item.Group))].map((groupName) => (
    <Option key={groupName} value={groupName}>{groupName}</Option>
))


//-------------------------------------------------------------------------------------
//unique objects
uniqueObjects = (array, propertyName) => {
    return array.filter((e, i) => array.findIndex(a => a[propertyName].toLowerCase() === e[propertyName].toLowerCase()) === i);
}
this.uniqueObjects(response.data, 'rule')

//-------------------------------------------------------------------------------------
//filter
[{
        title: "ETNI",
        dataIndex: "ETNI",
        render: (text, record) => getPassFailWithCompareIcon(text, record, "ETNI"),
        hidden: (selectedRow.RunType.toUpperCase() == 'PRE') ? false : true,
    }
].filter(item => !item.hidden);

//-------------------------------------------------------------------------------------
//DEBOUNCING:
setSearchText = (e) => {
    this.setState({ searchText: (e.target.value) })
    clearTimeout(wait);
    wait = setTimeout(() => {
        this.setState({ searchTextForFilter: (e.target.value) })
    }, 500);
}

//-------------------------------------------------------------------------------------
//group by
export const groupBy = (array, f, name) => {
    let groups = {};
    array.forEach(function (o) {
        var group = f(o);
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map((group) => {
        if (name) {
            return {
                [name]: group,
                values: groups[group]
            }
        }
        else {
            return {
                groupName: group,
                values: groups[group]
            }
        }
    })
}

//-------------------------------------------------------------------------------------
//Add new key to object
let md = morDetailsRef.current.map(each => ({
    ...each, ...(((each.pos_ord_no && (each.pos_ord_no == record.pos_ord_no)) || (each.pos_order_number &&
        (each.pos_order_number == record.pos_order_number)))
        && { reTriggered: true })
}))

let md = {
    "a": 123,
    ...(true) && { "b": 234 },
    ...(false) && { "c": 4587 }
}



//-------------------------------------------------------------------------------------
//Make multiple async api calls in a loop and merge everything at once
//https://dev.to/raviojha/javascript-making-multiple-api-calls-the-right-way-2b29


const automationDetailsAsync = (automationType, token, limit, offsetLimit) => {
    return new Promise((resolve, reject) => {
        getAutomationDetails(dateRange.fromDate, dateRange.toDate, seletedEnv, automationType, token, limit, offsetLimit).then((result) => {
            if (result) {
                let ResultType = Object.keys(result);
                if (ResultType.length > 0 && result[ResultType[0]]) {
                    resolve(result[ResultType[0]])
                }
                else { resolve([]) }
            }
        }).catch(e => reject(e))
    })
}


const auto_Data = async (fieldType, tokenResult) => {
    let promises = [];
    let result = [];
    let offset = 0;
    let iterations = automationOrderDataTotal[fieldType.automationType] / 1500;
    while (offset <= iterations) {
        promises.push(automationDetailsAsync(fieldType.automationType, tokenResult.token, 1500, offset * 1500));
        offset++;
    }
    const data = await Promise.all(promises);
    data.forEach((eachData) => {
        result = result.concat(eachData)
    });
    return result;
}


auto_Data(fieldType, tokenResult).then(data => {
    AutomaticData = data;
})


//-------------------------------------------------------------------------------------
//app header - stub json
export const getAppHeaderAPI = () => {
    if (window.location.href.indexOf('localhost') > -1) {
        let promise = new Promise((resolve, reject) => {
            let result = {
                "AppName": "SSO Header",
                "stubJson": true,
                "User": {
                    "FirstName": "Gajendran",
                    "LastName": "Sakkappa",
                    "FullName": "Sakkappa, Gajendran",
                    "Email": "gajendran.sakkappa@one.verizon.com",
                    "VZID": "SAKKGA1",
                    "EID": "2501960105",
                    "SM_USER": "SAKKGA1"
                }
            }
            resolve(result)
        })
        return promise;
    }
    else {
        return fetch(APPHEADER_API, {
            method: 'GET',
            cache: 'no-cache',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(err => {
                console.log(err)
            })
    }
};


//-------------------------------------------------------------------------------------

//AbortController
controller && controller.abort(); // enable for abort functionality

controller = new AbortController();
signal = controller.signal;