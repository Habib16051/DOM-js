let message = document.querySelector("#message");

function keyboardEvent(e){
    console.log(e.key);
}

message.addEventListener("keydown", keyboardEvent);
message.addEventListener("keyup", keyboardEvent);
message.addEventListener("keypress", keyboardEvent);
