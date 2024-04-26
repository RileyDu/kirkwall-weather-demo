computer_choice = "scissors"

user_choice = input("Do you want rock, paper or scissors? Enter your choice: \n")

# if user_choice == computer_choice:
#     print("It's a tie!")
# elif user_choice == "rock":
#     if computer_choice == "scissors":
#         print("You win!")
#     else:
#         print("You lose!")
# elif user_choice == "paper":
#     if computer_choice == "rock":
#         print("You win!")
#     else:
#         print("You lose!")
# elif user_choice == "scissors":
#     if computer_choice == "paper":
#         print("You win!")
#     else:
#         print("You lose!")

if computer_choice == user_choice:
    print("TIE!")
elif user_choice == "rock" and computer_choice == "scissors":
    print("YOU WIN!")
elif user_choice == "paper" and computer_choice == "rock":
    print("YOU WIN!")
elif user_choice == "scissors" and computer_choice == "paper":
    print("YOU WIN!")
else:
    print("YOU LOSE!")