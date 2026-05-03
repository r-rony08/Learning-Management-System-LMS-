from django.db import models
from django.utils.text import slugify
from apps.accounts.models import User


class Category(models.Model):
    name = models.CharField(max_length=100,unique=True)
    slug = models.SlugField(unique=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    instructor = models.ForeignKey(User,on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title
