JSResolve
=========

Eval in Javascript is, [according to received wisdom](http://blogs.msdn.com/b/ericlippert/archive/2003/11/01/53329.aspx), evil. In most cases it's a lazy short cut and not actually needed. JSResolve is a short simple function that will resolve a deeply-nested object or value contained within another object. For example:

Let's say this object, called "bob" exists:

    var bob = {
        name: "bob",
        age : 42,
        friend:
                {
                    name: "alice",
                    age: 41
                },
        enemy:
                {
                    name: "eve",
                    age: 40
                }
    }

So:

    bob.name;                       // returns "bob"

    bob.friend.name;                // returns "alice"

    bob.enemy.age;                  // returns 40

A string labelled "friendsName" with the value "friend.name" _could_ be resolved using eval:

    var friendsName = "friend.name";

    eval("bob." + friendsName);     // returns "alice"

But where and how _friendsName_ is set could cause problems for this code in future. If the string were single-depth (e.g. "name") then it could easily be resolved by :

    bob["name"];                    // equivilent to bob.name

But deeper references don't work:

    bob["friend.name"]              // returns undefined

JSResolve resolves this:

    jsresolve(bob, friendsName);    // returns "alice"

Anything that can't be resolved returns _undefined_.  

That's it. Simple.  
