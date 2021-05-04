// Use the D3 library to read in samples.json.
function getData(id) {
    d3.json("data/samples.json").then(function(importedData) {
        var metadata = importedData.metadata;
        console.log(metadata);

        // Filter Sample by id
        var resultComplete = metadata.filter(biodata => biodata.id == sample)[0];
        var panelContent = d3.select("#sample-metadata");

        // Clear panel
        panelContent.html("");
        Object.entries(resultComplete).forEach((key) => {
            panelContent.append("p").text(key[0]+":"+key[1]);
        });
    });
};

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

function getChart(id) {
    d3.json("data/samples.json").then((importedData) => {
        
        // Filter wfreq by id
        var wfreq = importedData.metadata.filter(f => f.id.toString() === id)[0];
        // wfreq = wfreq.wfreq;
        console.log(wfreq);

        // Filter samples by id
        var samples = importedData.samples.filter(s => s.id.toString() === id)[0];
        console.log(samples);

        // Get top 10
        var sample10 = samples.sampleData.slice(0,10).reverse();
        console.log(sample10);

        // Get top 10 otu
        var otu10 = (samples.otu_ids.slice(0,10)).reverse();
        
        // Use otu_ids for the marker colors.
        var otu_ids = otu10.map(f => "OTU " + f);
        console.log(otu_ids);
    });
};


// Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.

// Use otu_labels for the text values.


// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all of the plots any time that a new sample is selected.

