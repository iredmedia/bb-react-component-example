/** @jsx React.DOM */

// VIEW: React User view!
var User = Backbone.React.Component.extend({
    render: function() {
        return (
            <div className="component user">
                <img src={this.props.image} className="image" />
                <div className="name">{this.props.name}</div>
            </div>
        );
    }
});

// MODEL: Backbone Model!
var userModel = new Backbone.Model({
    "name": "User Name",
    "image": "url"
});

// WRAPPER: Backbone-React-Component! Attach React User view to el and model
var newComponent = new User({
    el:    $('body'),
    model: userModel
});

// Update model and watch React/Backbone work their magic dance.
userModel.set('name', 'Kevin Redman');
userModel.set('image', 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1.0-1/c0.0.50.50/p50x50/1969177_10151962564282543_2041558306_t.jpg');

// Mount it up!
newComponent.mount();
