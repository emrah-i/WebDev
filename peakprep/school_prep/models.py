from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

class User(AbstractUser):
    premium = models.BooleanField(default=False)

class GeneralCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class SpecificCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    general_category = models.ForeignKey(GeneralCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class HomeModule(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    display = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    path = models.CharField(max_length=255)
    flashcards = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Module(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    identifier = models.CharField(max_length=255)
    order = models.PositiveSmallIntegerField()
    specific_category = models.ForeignKey(SpecificCategory, on_delete=models.CASCADE)
    completed = models.ManyToManyField(User, related_name='completed_module_users', blank=True)    

    def __str__(self):
        return self.name
    
class Section(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    order = models.PositiveSmallIntegerField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    path = models.CharField(max_length=255)
    completed = models.ManyToManyField(User, related_name='completed_section_users', blank=True)    

    def __str__(self):
        return self.name

class PracticeQuestion(models.Model):
    id = models.AutoField(primary_key=True)
    specific_category = models.ForeignKey(SpecificCategory, on_delete=models.CASCADE)
    text = models.TextField()
    difficulty = models.PositiveSmallIntegerField(
        validators=[
            MinValueValidator(limit_value=1),
            MaxValueValidator(limit_value=3)
        ]
    )
    correct_answer = models.CharField(max_length=255)
    wrong_answers = ArrayField(models.CharField(max_length=255))
    tag = models.ManyToManyField(User, related_name='tagged_question_users', blank=True)   
    prioritize = models.ManyToManyField(User, related_name='prioritizing_question_users', blank=True)   
    completed = models.ManyToManyField(User, related_name='completed_question_users', blank=True)     

    def __str__(self):
        return self.text
    
class ExamQuestion(models.Model):
    id = models.AutoField(primary_key=True)
    specific_category = models.ForeignKey(SpecificCategory, on_delete=models.CASCADE)
    text = models.TextField()
    difficulty = models.PositiveSmallIntegerField(
        validators=[
            MinValueValidator(limit_value=1),
            MaxValueValidator(limit_value=3)
        ]
    )
    correct_answer = models.CharField(max_length=255)
    wrong_answers = ArrayField(models.CharField(max_length=255))
    tag = models.ManyToManyField(User, related_name='tagged_exam_question_users', blank=True)   
    prioritize = models.ManyToManyField(User, related_name='prioritizing_exam_question_users', blank=True)   

    def __str__(self):
        return self.text

class Exam(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    questions = ArrayField(models.PositiveIntegerField())
    general_category = models.ForeignKey(GeneralCategory, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.general_category} Exam (id: {self.id})"

class ExamResult(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    exam_id = models.ForeignKey(Exam, on_delete=models.CASCADE)
    transcript = models.JSONField()
    score = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Exam {self.id} taken by {self.user.username} on {self.timestamp}"

class Note(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    exam_result = models.ForeignKey(ExamResult, on_delete=models.CASCADE)

    def __str__(self):
        return f"Note by {self.user.username} on {self.exam_result}"

