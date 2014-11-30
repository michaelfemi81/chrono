
test("Test - Single expression", function() {


    var text = "10 August 2012";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 August 2012', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }

    var text = "The Deadline is 10 August";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){
        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        ok(result.index == 16, 'Wrong index')
        ok(result.text == '10 August', result.text )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});



test("Test - Range expression", function() {


    var text = "10 - 22 August 2012";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 - 22 August 2012', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
        

        ok(result.end, JSON.stringify(result.end) )
        ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.end.get('day') == 22, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 8-1, 22, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }


    var text = "10 to 22 August 2012";
    var results = chrono.parse(text, new Date(2012,7,10));
    ok(results.length == 1, JSON.stringify( results ) )

    var result = results[0];
    if(result){

        ok(result.index == 0, 'Wrong index')
        ok(result.text == '10 to 22 August 2012', result.text )

        ok(result.start, JSON.stringify(result.start) )
        ok(result.start.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.start.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.start.get('day') == 10, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 10, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
        

        ok(result.end, JSON.stringify(result.end) )
        ok(result.end.get('year') == 2012, 'Test Result - (Year) ' + JSON.stringify(result.start) )
        ok(result.end.get('month') == 8, 'Test Result - (Month) ' + JSON.stringify(result.start) )
        ok(result.end.get('day') == 22, 'Test Result - (Day) ' + JSON.stringify(result.start) )

        var resultDate = result.end.date();
        var expectDate = new Date(2012, 8-1, 22, 12);
        ok(Math.abs(expectDate.getTime() - resultDate.getTime()) < 100000, 'Test result.startDate ' + resultDate +'/' +expectDate)
    }
});

// test("Test - Impossible", function() {
//     // 
//     // var text = "32 August 2014";
//     // var results = chrono.parse(text, new Date(2012,7,10));
//     // ok(results.length == 0, JSON.stringify( results ) )


//     // var text = "29 Febuary 2014";
//     // var results = chrono.parse(text, new Date(2012,7,10));
//     // ok(results.length == 0, JSON.stringify( results ) )
// });


